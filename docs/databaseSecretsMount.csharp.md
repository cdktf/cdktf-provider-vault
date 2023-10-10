# `vault_database_secrets_mount`

Refer to the Terraform Registory for docs: [`vault_database_secrets_mount`](https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount).

# `databaseSecretsMount` Submodule <a name="`databaseSecretsMount` Submodule" id="@cdktf/provider-vault.databaseSecretsMount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseSecretsMount <a name="DatabaseSecretsMount" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount vault_database_secrets_mount}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMount(Construct Scope, string Id, DatabaseSecretsMountConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig">DatabaseSecretsMountConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig">DatabaseSecretsMountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putCassandra">PutCassandra</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putCouchbase">PutCouchbase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putElasticsearch">PutElasticsearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putHana">PutHana</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putInfluxdb">PutInfluxdb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMongodb">PutMongodb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMongodbatlas">PutMongodbatlas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMssql">PutMssql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMysql">PutMysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMysqlAurora">PutMysqlAurora</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMysqlLegacy">PutMysqlLegacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMysqlRds">PutMysqlRds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putOracle">PutOracle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putPostgresql">PutPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putRedis">PutRedis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putRedisElasticache">PutRedisElasticache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putRedshift">PutRedshift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putSnowflake">PutSnowflake</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetAllowedManagedKeys">ResetAllowedManagedKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetAuditNonHmacRequestKeys">ResetAuditNonHmacRequestKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetAuditNonHmacResponseKeys">ResetAuditNonHmacResponseKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetCassandra">ResetCassandra</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetCouchbase">ResetCouchbase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetDefaultLeaseTtlSeconds">ResetDefaultLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetElasticsearch">ResetElasticsearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetExternalEntropyAccess">ResetExternalEntropyAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetHana">ResetHana</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetInfluxdb">ResetInfluxdb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetLocal">ResetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMaxLeaseTtlSeconds">ResetMaxLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMongodb">ResetMongodb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMongodbatlas">ResetMongodbatlas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMssql">ResetMssql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMysql">ResetMysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMysqlAurora">ResetMysqlAurora</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMysqlLegacy">ResetMysqlLegacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMysqlRds">ResetMysqlRds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetOracle">ResetOracle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetPostgresql">ResetPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetRedis">ResetRedis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetRedisElasticache">ResetRedisElasticache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetRedshift">ResetRedshift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetSealWrap">ResetSealWrap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetSnowflake">ResetSnowflake</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCassandra` <a name="PutCassandra" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putCassandra"></a>

```csharp
private void PutCassandra(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putCassandra.parameter.value"></a>

- *Type:* object

---

##### `PutCouchbase` <a name="PutCouchbase" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putCouchbase"></a>

```csharp
private void PutCouchbase(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putCouchbase.parameter.value"></a>

- *Type:* object

---

##### `PutElasticsearch` <a name="PutElasticsearch" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putElasticsearch"></a>

```csharp
private void PutElasticsearch(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putElasticsearch.parameter.value"></a>

- *Type:* object

---

##### `PutHana` <a name="PutHana" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putHana"></a>

```csharp
private void PutHana(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putHana.parameter.value"></a>

- *Type:* object

---

##### `PutInfluxdb` <a name="PutInfluxdb" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putInfluxdb"></a>

```csharp
private void PutInfluxdb(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putInfluxdb.parameter.value"></a>

- *Type:* object

---

##### `PutMongodb` <a name="PutMongodb" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMongodb"></a>

```csharp
private void PutMongodb(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMongodb.parameter.value"></a>

- *Type:* object

---

##### `PutMongodbatlas` <a name="PutMongodbatlas" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMongodbatlas"></a>

```csharp
private void PutMongodbatlas(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMongodbatlas.parameter.value"></a>

- *Type:* object

---

##### `PutMssql` <a name="PutMssql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMssql"></a>

```csharp
private void PutMssql(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMssql.parameter.value"></a>

- *Type:* object

---

##### `PutMysql` <a name="PutMysql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMysql"></a>

```csharp
private void PutMysql(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMysql.parameter.value"></a>

- *Type:* object

---

##### `PutMysqlAurora` <a name="PutMysqlAurora" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMysqlAurora"></a>

```csharp
private void PutMysqlAurora(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMysqlAurora.parameter.value"></a>

- *Type:* object

---

##### `PutMysqlLegacy` <a name="PutMysqlLegacy" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMysqlLegacy"></a>

```csharp
private void PutMysqlLegacy(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMysqlLegacy.parameter.value"></a>

- *Type:* object

---

##### `PutMysqlRds` <a name="PutMysqlRds" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMysqlRds"></a>

```csharp
private void PutMysqlRds(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putMysqlRds.parameter.value"></a>

- *Type:* object

---

##### `PutOracle` <a name="PutOracle" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putOracle"></a>

```csharp
private void PutOracle(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putOracle.parameter.value"></a>

- *Type:* object

---

##### `PutPostgresql` <a name="PutPostgresql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putPostgresql"></a>

```csharp
private void PutPostgresql(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putPostgresql.parameter.value"></a>

- *Type:* object

---

##### `PutRedis` <a name="PutRedis" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putRedis"></a>

```csharp
private void PutRedis(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putRedis.parameter.value"></a>

- *Type:* object

---

##### `PutRedisElasticache` <a name="PutRedisElasticache" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putRedisElasticache"></a>

```csharp
private void PutRedisElasticache(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putRedisElasticache.parameter.value"></a>

- *Type:* object

---

##### `PutRedshift` <a name="PutRedshift" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putRedshift"></a>

```csharp
private void PutRedshift(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putRedshift.parameter.value"></a>

- *Type:* object

---

##### `PutSnowflake` <a name="PutSnowflake" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putSnowflake"></a>

```csharp
private void PutSnowflake(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.putSnowflake.parameter.value"></a>

- *Type:* object

---

##### `ResetAllowedManagedKeys` <a name="ResetAllowedManagedKeys" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetAllowedManagedKeys"></a>

```csharp
private void ResetAllowedManagedKeys()
```

##### `ResetAuditNonHmacRequestKeys` <a name="ResetAuditNonHmacRequestKeys" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetAuditNonHmacRequestKeys"></a>

```csharp
private void ResetAuditNonHmacRequestKeys()
```

##### `ResetAuditNonHmacResponseKeys` <a name="ResetAuditNonHmacResponseKeys" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetAuditNonHmacResponseKeys"></a>

```csharp
private void ResetAuditNonHmacResponseKeys()
```

##### `ResetCassandra` <a name="ResetCassandra" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetCassandra"></a>

```csharp
private void ResetCassandra()
```

##### `ResetCouchbase` <a name="ResetCouchbase" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetCouchbase"></a>

```csharp
private void ResetCouchbase()
```

##### `ResetDefaultLeaseTtlSeconds` <a name="ResetDefaultLeaseTtlSeconds" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetDefaultLeaseTtlSeconds"></a>

```csharp
private void ResetDefaultLeaseTtlSeconds()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetElasticsearch` <a name="ResetElasticsearch" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetElasticsearch"></a>

```csharp
private void ResetElasticsearch()
```

##### `ResetExternalEntropyAccess` <a name="ResetExternalEntropyAccess" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetExternalEntropyAccess"></a>

```csharp
private void ResetExternalEntropyAccess()
```

##### `ResetHana` <a name="ResetHana" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetHana"></a>

```csharp
private void ResetHana()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInfluxdb` <a name="ResetInfluxdb" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetInfluxdb"></a>

```csharp
private void ResetInfluxdb()
```

##### `ResetLocal` <a name="ResetLocal" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetLocal"></a>

```csharp
private void ResetLocal()
```

##### `ResetMaxLeaseTtlSeconds` <a name="ResetMaxLeaseTtlSeconds" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMaxLeaseTtlSeconds"></a>

```csharp
private void ResetMaxLeaseTtlSeconds()
```

##### `ResetMongodb` <a name="ResetMongodb" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMongodb"></a>

```csharp
private void ResetMongodb()
```

##### `ResetMongodbatlas` <a name="ResetMongodbatlas" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMongodbatlas"></a>

```csharp
private void ResetMongodbatlas()
```

##### `ResetMssql` <a name="ResetMssql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMssql"></a>

```csharp
private void ResetMssql()
```

##### `ResetMysql` <a name="ResetMysql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMysql"></a>

```csharp
private void ResetMysql()
```

##### `ResetMysqlAurora` <a name="ResetMysqlAurora" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMysqlAurora"></a>

```csharp
private void ResetMysqlAurora()
```

##### `ResetMysqlLegacy` <a name="ResetMysqlLegacy" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMysqlLegacy"></a>

```csharp
private void ResetMysqlLegacy()
```

##### `ResetMysqlRds` <a name="ResetMysqlRds" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetMysqlRds"></a>

```csharp
private void ResetMysqlRds()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetOptions"></a>

```csharp
private void ResetOptions()
```

##### `ResetOracle` <a name="ResetOracle" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetOracle"></a>

```csharp
private void ResetOracle()
```

##### `ResetPostgresql` <a name="ResetPostgresql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetPostgresql"></a>

```csharp
private void ResetPostgresql()
```

##### `ResetRedis` <a name="ResetRedis" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetRedis"></a>

```csharp
private void ResetRedis()
```

##### `ResetRedisElasticache` <a name="ResetRedisElasticache" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetRedisElasticache"></a>

```csharp
private void ResetRedisElasticache()
```

##### `ResetRedshift` <a name="ResetRedshift" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetRedshift"></a>

```csharp
private void ResetRedshift()
```

##### `ResetSealWrap` <a name="ResetSealWrap" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetSealWrap"></a>

```csharp
private void ResetSealWrap()
```

##### `ResetSnowflake` <a name="ResetSnowflake" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.resetSnowflake"></a>

```csharp
private void ResetSnowflake()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DatabaseSecretsMount.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DatabaseSecretsMount.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DatabaseSecretsMount.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.accessor">Accessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.cassandra">Cassandra</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList">DatabaseSecretsMountCassandraList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.couchbase">Couchbase</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList">DatabaseSecretsMountCouchbaseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.elasticsearch">Elasticsearch</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList">DatabaseSecretsMountElasticsearchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.engineCount">EngineCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.hana">Hana</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList">DatabaseSecretsMountHanaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.influxdb">Influxdb</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList">DatabaseSecretsMountInfluxdbList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mongodb">Mongodb</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList">DatabaseSecretsMountMongodbList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mongodbatlas">Mongodbatlas</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList">DatabaseSecretsMountMongodbatlasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mssql">Mssql</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList">DatabaseSecretsMountMssqlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysql">Mysql</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList">DatabaseSecretsMountMysqlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlAurora">MysqlAurora</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList">DatabaseSecretsMountMysqlAuroraList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlLegacy">MysqlLegacy</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList">DatabaseSecretsMountMysqlLegacyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlRds">MysqlRds</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList">DatabaseSecretsMountMysqlRdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.oracle">Oracle</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList">DatabaseSecretsMountOracleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.postgresql">Postgresql</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList">DatabaseSecretsMountPostgresqlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.redis">Redis</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList">DatabaseSecretsMountRedisList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.redisElasticache">RedisElasticache</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList">DatabaseSecretsMountRedisElasticacheList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.redshift">Redshift</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList">DatabaseSecretsMountRedshiftList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.snowflake">Snowflake</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList">DatabaseSecretsMountSnowflakeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.allowedManagedKeysInput">AllowedManagedKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.auditNonHmacRequestKeysInput">AuditNonHmacRequestKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.auditNonHmacResponseKeysInput">AuditNonHmacResponseKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.cassandraInput">CassandraInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.couchbaseInput">CouchbaseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.defaultLeaseTtlSecondsInput">DefaultLeaseTtlSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.elasticsearchInput">ElasticsearchInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.externalEntropyAccessInput">ExternalEntropyAccessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.hanaInput">HanaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.influxdbInput">InfluxdbInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.localInput">LocalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.maxLeaseTtlSecondsInput">MaxLeaseTtlSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mongodbatlasInput">MongodbatlasInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mongodbInput">MongodbInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mssqlInput">MssqlInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlAuroraInput">MysqlAuroraInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlInput">MysqlInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlLegacyInput">MysqlLegacyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlRdsInput">MysqlRdsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.optionsInput">OptionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.oracleInput">OracleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.postgresqlInput">PostgresqlInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.redisElasticacheInput">RedisElasticacheInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.redisInput">RedisInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.redshiftInput">RedshiftInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.sealWrapInput">SealWrapInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.snowflakeInput">SnowflakeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.allowedManagedKeys">AllowedManagedKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.defaultLeaseTtlSeconds">DefaultLeaseTtlSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.externalEntropyAccess">ExternalEntropyAccess</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.local">Local</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.maxLeaseTtlSeconds">MaxLeaseTtlSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.sealWrap">SealWrap</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Accessor`<sup>Required</sup> <a name="Accessor" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.accessor"></a>

```csharp
public string Accessor { get; }
```

- *Type:* string

---

##### `Cassandra`<sup>Required</sup> <a name="Cassandra" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.cassandra"></a>

```csharp
public DatabaseSecretsMountCassandraList Cassandra { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList">DatabaseSecretsMountCassandraList</a>

---

##### `Couchbase`<sup>Required</sup> <a name="Couchbase" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.couchbase"></a>

```csharp
public DatabaseSecretsMountCouchbaseList Couchbase { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList">DatabaseSecretsMountCouchbaseList</a>

---

##### `Elasticsearch`<sup>Required</sup> <a name="Elasticsearch" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.elasticsearch"></a>

```csharp
public DatabaseSecretsMountElasticsearchList Elasticsearch { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList">DatabaseSecretsMountElasticsearchList</a>

---

##### `EngineCount`<sup>Required</sup> <a name="EngineCount" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.engineCount"></a>

```csharp
public double EngineCount { get; }
```

- *Type:* double

---

##### `Hana`<sup>Required</sup> <a name="Hana" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.hana"></a>

```csharp
public DatabaseSecretsMountHanaList Hana { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList">DatabaseSecretsMountHanaList</a>

---

##### `Influxdb`<sup>Required</sup> <a name="Influxdb" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.influxdb"></a>

```csharp
public DatabaseSecretsMountInfluxdbList Influxdb { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList">DatabaseSecretsMountInfluxdbList</a>

---

##### `Mongodb`<sup>Required</sup> <a name="Mongodb" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mongodb"></a>

```csharp
public DatabaseSecretsMountMongodbList Mongodb { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList">DatabaseSecretsMountMongodbList</a>

---

##### `Mongodbatlas`<sup>Required</sup> <a name="Mongodbatlas" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mongodbatlas"></a>

```csharp
public DatabaseSecretsMountMongodbatlasList Mongodbatlas { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList">DatabaseSecretsMountMongodbatlasList</a>

---

##### `Mssql`<sup>Required</sup> <a name="Mssql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mssql"></a>

```csharp
public DatabaseSecretsMountMssqlList Mssql { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList">DatabaseSecretsMountMssqlList</a>

---

##### `Mysql`<sup>Required</sup> <a name="Mysql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysql"></a>

```csharp
public DatabaseSecretsMountMysqlList Mysql { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList">DatabaseSecretsMountMysqlList</a>

---

##### `MysqlAurora`<sup>Required</sup> <a name="MysqlAurora" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlAurora"></a>

```csharp
public DatabaseSecretsMountMysqlAuroraList MysqlAurora { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList">DatabaseSecretsMountMysqlAuroraList</a>

---

##### `MysqlLegacy`<sup>Required</sup> <a name="MysqlLegacy" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlLegacy"></a>

```csharp
public DatabaseSecretsMountMysqlLegacyList MysqlLegacy { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList">DatabaseSecretsMountMysqlLegacyList</a>

---

##### `MysqlRds`<sup>Required</sup> <a name="MysqlRds" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlRds"></a>

```csharp
public DatabaseSecretsMountMysqlRdsList MysqlRds { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList">DatabaseSecretsMountMysqlRdsList</a>

---

##### `Oracle`<sup>Required</sup> <a name="Oracle" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.oracle"></a>

```csharp
public DatabaseSecretsMountOracleList Oracle { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList">DatabaseSecretsMountOracleList</a>

---

##### `Postgresql`<sup>Required</sup> <a name="Postgresql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.postgresql"></a>

```csharp
public DatabaseSecretsMountPostgresqlList Postgresql { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList">DatabaseSecretsMountPostgresqlList</a>

---

##### `Redis`<sup>Required</sup> <a name="Redis" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.redis"></a>

```csharp
public DatabaseSecretsMountRedisList Redis { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList">DatabaseSecretsMountRedisList</a>

---

##### `RedisElasticache`<sup>Required</sup> <a name="RedisElasticache" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.redisElasticache"></a>

```csharp
public DatabaseSecretsMountRedisElasticacheList RedisElasticache { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList">DatabaseSecretsMountRedisElasticacheList</a>

---

##### `Redshift`<sup>Required</sup> <a name="Redshift" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.redshift"></a>

```csharp
public DatabaseSecretsMountRedshiftList Redshift { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList">DatabaseSecretsMountRedshiftList</a>

---

##### `Snowflake`<sup>Required</sup> <a name="Snowflake" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.snowflake"></a>

```csharp
public DatabaseSecretsMountSnowflakeList Snowflake { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList">DatabaseSecretsMountSnowflakeList</a>

---

##### `AllowedManagedKeysInput`<sup>Optional</sup> <a name="AllowedManagedKeysInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.allowedManagedKeysInput"></a>

```csharp
public string[] AllowedManagedKeysInput { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacRequestKeysInput`<sup>Optional</sup> <a name="AuditNonHmacRequestKeysInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.auditNonHmacRequestKeysInput"></a>

```csharp
public string[] AuditNonHmacRequestKeysInput { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacResponseKeysInput`<sup>Optional</sup> <a name="AuditNonHmacResponseKeysInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.auditNonHmacResponseKeysInput"></a>

```csharp
public string[] AuditNonHmacResponseKeysInput { get; }
```

- *Type:* string[]

---

##### `CassandraInput`<sup>Optional</sup> <a name="CassandraInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.cassandraInput"></a>

```csharp
public object CassandraInput { get; }
```

- *Type:* object

---

##### `CouchbaseInput`<sup>Optional</sup> <a name="CouchbaseInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.couchbaseInput"></a>

```csharp
public object CouchbaseInput { get; }
```

- *Type:* object

---

##### `DefaultLeaseTtlSecondsInput`<sup>Optional</sup> <a name="DefaultLeaseTtlSecondsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.defaultLeaseTtlSecondsInput"></a>

```csharp
public double DefaultLeaseTtlSecondsInput { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ElasticsearchInput`<sup>Optional</sup> <a name="ElasticsearchInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.elasticsearchInput"></a>

```csharp
public object ElasticsearchInput { get; }
```

- *Type:* object

---

##### `ExternalEntropyAccessInput`<sup>Optional</sup> <a name="ExternalEntropyAccessInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.externalEntropyAccessInput"></a>

```csharp
public object ExternalEntropyAccessInput { get; }
```

- *Type:* object

---

##### `HanaInput`<sup>Optional</sup> <a name="HanaInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.hanaInput"></a>

```csharp
public object HanaInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InfluxdbInput`<sup>Optional</sup> <a name="InfluxdbInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.influxdbInput"></a>

```csharp
public object InfluxdbInput { get; }
```

- *Type:* object

---

##### `LocalInput`<sup>Optional</sup> <a name="LocalInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.localInput"></a>

```csharp
public object LocalInput { get; }
```

- *Type:* object

---

##### `MaxLeaseTtlSecondsInput`<sup>Optional</sup> <a name="MaxLeaseTtlSecondsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.maxLeaseTtlSecondsInput"></a>

```csharp
public double MaxLeaseTtlSecondsInput { get; }
```

- *Type:* double

---

##### `MongodbatlasInput`<sup>Optional</sup> <a name="MongodbatlasInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mongodbatlasInput"></a>

```csharp
public object MongodbatlasInput { get; }
```

- *Type:* object

---

##### `MongodbInput`<sup>Optional</sup> <a name="MongodbInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mongodbInput"></a>

```csharp
public object MongodbInput { get; }
```

- *Type:* object

---

##### `MssqlInput`<sup>Optional</sup> <a name="MssqlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mssqlInput"></a>

```csharp
public object MssqlInput { get; }
```

- *Type:* object

---

##### `MysqlAuroraInput`<sup>Optional</sup> <a name="MysqlAuroraInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlAuroraInput"></a>

```csharp
public object MysqlAuroraInput { get; }
```

- *Type:* object

---

##### `MysqlInput`<sup>Optional</sup> <a name="MysqlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlInput"></a>

```csharp
public object MysqlInput { get; }
```

- *Type:* object

---

##### `MysqlLegacyInput`<sup>Optional</sup> <a name="MysqlLegacyInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlLegacyInput"></a>

```csharp
public object MysqlLegacyInput { get; }
```

- *Type:* object

---

##### `MysqlRdsInput`<sup>Optional</sup> <a name="MysqlRdsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.mysqlRdsInput"></a>

```csharp
public object MysqlRdsInput { get; }
```

- *Type:* object

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.optionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OptionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OracleInput`<sup>Optional</sup> <a name="OracleInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.oracleInput"></a>

```csharp
public object OracleInput { get; }
```

- *Type:* object

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PostgresqlInput`<sup>Optional</sup> <a name="PostgresqlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.postgresqlInput"></a>

```csharp
public object PostgresqlInput { get; }
```

- *Type:* object

---

##### `RedisElasticacheInput`<sup>Optional</sup> <a name="RedisElasticacheInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.redisElasticacheInput"></a>

```csharp
public object RedisElasticacheInput { get; }
```

- *Type:* object

---

##### `RedisInput`<sup>Optional</sup> <a name="RedisInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.redisInput"></a>

```csharp
public object RedisInput { get; }
```

- *Type:* object

---

##### `RedshiftInput`<sup>Optional</sup> <a name="RedshiftInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.redshiftInput"></a>

```csharp
public object RedshiftInput { get; }
```

- *Type:* object

---

##### `SealWrapInput`<sup>Optional</sup> <a name="SealWrapInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.sealWrapInput"></a>

```csharp
public object SealWrapInput { get; }
```

- *Type:* object

---

##### `SnowflakeInput`<sup>Optional</sup> <a name="SnowflakeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.snowflakeInput"></a>

```csharp
public object SnowflakeInput { get; }
```

- *Type:* object

---

##### `AllowedManagedKeys`<sup>Required</sup> <a name="AllowedManagedKeys" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.allowedManagedKeys"></a>

```csharp
public string[] AllowedManagedKeys { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacRequestKeys`<sup>Required</sup> <a name="AuditNonHmacRequestKeys" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.auditNonHmacRequestKeys"></a>

```csharp
public string[] AuditNonHmacRequestKeys { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacResponseKeys`<sup>Required</sup> <a name="AuditNonHmacResponseKeys" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.auditNonHmacResponseKeys"></a>

```csharp
public string[] AuditNonHmacResponseKeys { get; }
```

- *Type:* string[]

---

##### `DefaultLeaseTtlSeconds`<sup>Required</sup> <a name="DefaultLeaseTtlSeconds" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.defaultLeaseTtlSeconds"></a>

```csharp
public double DefaultLeaseTtlSeconds { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExternalEntropyAccess`<sup>Required</sup> <a name="ExternalEntropyAccess" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.externalEntropyAccess"></a>

```csharp
public object ExternalEntropyAccess { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Local`<sup>Required</sup> <a name="Local" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.local"></a>

```csharp
public object Local { get; }
```

- *Type:* object

---

##### `MaxLeaseTtlSeconds`<sup>Required</sup> <a name="MaxLeaseTtlSeconds" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.maxLeaseTtlSeconds"></a>

```csharp
public double MaxLeaseTtlSeconds { get; }
```

- *Type:* double

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `SealWrap`<sup>Required</sup> <a name="SealWrap" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.sealWrap"></a>

```csharp
public object SealWrap { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMount.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseSecretsMountCassandra <a name="DatabaseSecretsMountCassandra" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountCassandra {
    string Name,
    string[] AllowedRoles = null,
    double ConnectTimeout = null,
    System.Collections.Generic.IDictionary<string, string> Data = null,
    string[] Hosts = null,
    object InsecureTls = null,
    string Password = null,
    string PemBundle = null,
    string PemJson = null,
    string PluginName = null,
    double Port = null,
    double ProtocolVersion = null,
    string[] RootRotationStatements = null,
    object Tls = null,
    string Username = null,
    object VerifyConnection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.name">Name</a></code> | <code>string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.connectTimeout">ConnectTimeout</a></code> | <code>double</code> | The number of seconds to use as a connection timeout. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.data">Data</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.hosts">Hosts</a></code> | <code>string[]</code> | Cassandra hosts to connect to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.insecureTls">InsecureTls</a></code> | <code>object</code> | Whether to skip verification of the server certificate when using TLS. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.password">Password</a></code> | <code>string</code> | The password to use when authenticating with Cassandra. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.pemBundle">PemBundle</a></code> | <code>string</code> | Concatenated PEM blocks containing a certificate and private key; |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.pemJson">PemJson</a></code> | <code>string</code> | Specifies JSON containing a certificate and private key; |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.pluginName">PluginName</a></code> | <code>string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.port">Port</a></code> | <code>double</code> | The transport port to use to connect to Cassandra. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.protocolVersion">ProtocolVersion</a></code> | <code>double</code> | The CQL protocol version to use. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.rootRotationStatements">RootRotationStatements</a></code> | <code>string[]</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.tls">Tls</a></code> | <code>object</code> | Whether to use TLS when connecting to Cassandra. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.username">Username</a></code> | <code>string</code> | The username to use when authenticating with Cassandra. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.verifyConnection">VerifyConnection</a></code> | <code>object</code> | Specifies if the connection is verified during initial configuration. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; set; }
```

- *Type:* string[]

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `ConnectTimeout`<sup>Optional</sup> <a name="ConnectTimeout" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.connectTimeout"></a>

```csharp
public double ConnectTimeout { get; set; }
```

- *Type:* double

The number of seconds to use as a connection timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#connect_timeout DatabaseSecretsMount#connect_timeout}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.data"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Data { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `Hosts`<sup>Optional</sup> <a name="Hosts" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.hosts"></a>

```csharp
public string[] Hosts { get; set; }
```

- *Type:* string[]

Cassandra hosts to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#hosts DatabaseSecretsMount#hosts}

---

##### `InsecureTls`<sup>Optional</sup> <a name="InsecureTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.insecureTls"></a>

```csharp
public object InsecureTls { get; set; }
```

- *Type:* object

Whether to skip verification of the server certificate when using TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#insecure_tls DatabaseSecretsMount#insecure_tls}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The password to use when authenticating with Cassandra.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `PemBundle`<sup>Optional</sup> <a name="PemBundle" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.pemBundle"></a>

```csharp
public string PemBundle { get; set; }
```

- *Type:* string

Concatenated PEM blocks containing a certificate and private key;

a certificate, private key, and issuing CA certificate; or just a CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#pem_bundle DatabaseSecretsMount#pem_bundle}

---

##### `PemJson`<sup>Optional</sup> <a name="PemJson" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.pemJson"></a>

```csharp
public string PemJson { get; set; }
```

- *Type:* string

Specifies JSON containing a certificate and private key;

a certificate, private key, and issuing CA certificate; or just a CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#pem_json DatabaseSecretsMount#pem_json}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.pluginName"></a>

```csharp
public string PluginName { get; set; }
```

- *Type:* string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The transport port to use to connect to Cassandra.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#port DatabaseSecretsMount#port}

---

##### `ProtocolVersion`<sup>Optional</sup> <a name="ProtocolVersion" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.protocolVersion"></a>

```csharp
public double ProtocolVersion { get; set; }
```

- *Type:* double

The CQL protocol version to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#protocol_version DatabaseSecretsMount#protocol_version}

---

##### `RootRotationStatements`<sup>Optional</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.rootRotationStatements"></a>

```csharp
public string[] RootRotationStatements { get; set; }
```

- *Type:* string[]

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `Tls`<sup>Optional</sup> <a name="Tls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.tls"></a>

```csharp
public object Tls { get; set; }
```

- *Type:* object

Whether to use TLS when connecting to Cassandra.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#tls DatabaseSecretsMount#tls}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The username to use when authenticating with Cassandra.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `VerifyConnection`<sup>Optional</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandra.property.verifyConnection"></a>

```csharp
public object VerifyConnection { get; set; }
```

- *Type:* object

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountConfig <a name="DatabaseSecretsMountConfig" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Path,
    string[] AllowedManagedKeys = null,
    string[] AuditNonHmacRequestKeys = null,
    string[] AuditNonHmacResponseKeys = null,
    object Cassandra = null,
    object Couchbase = null,
    double DefaultLeaseTtlSeconds = null,
    string Description = null,
    object Elasticsearch = null,
    object ExternalEntropyAccess = null,
    object Hana = null,
    string Id = null,
    object Influxdb = null,
    object Local = null,
    double MaxLeaseTtlSeconds = null,
    object Mongodb = null,
    object Mongodbatlas = null,
    object Mssql = null,
    object Mysql = null,
    object MysqlAurora = null,
    object MysqlLegacy = null,
    object MysqlRds = null,
    string Namespace = null,
    System.Collections.Generic.IDictionary<string, string> Options = null,
    object Oracle = null,
    object Postgresql = null,
    object Redis = null,
    object RedisElasticache = null,
    object Redshift = null,
    object SealWrap = null,
    object Snowflake = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.path">Path</a></code> | <code>string</code> | Where the secret backend will be mounted. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.allowedManagedKeys">AllowedManagedKeys</a></code> | <code>string[]</code> | List of managed key registry entry names that the mount in question is allowed to access. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>string[]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the request data object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>string[]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the response data object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.cassandra">Cassandra</a></code> | <code>object</code> | cassandra block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.couchbase">Couchbase</a></code> | <code>object</code> | couchbase block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.defaultLeaseTtlSeconds">DefaultLeaseTtlSeconds</a></code> | <code>double</code> | Default lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.description">Description</a></code> | <code>string</code> | Human-friendly description of the mount. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.elasticsearch">Elasticsearch</a></code> | <code>object</code> | elasticsearch block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.externalEntropyAccess">ExternalEntropyAccess</a></code> | <code>object</code> | Enable the secrets engine to access Vault's external entropy source. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.hana">Hana</a></code> | <code>object</code> | hana block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#id DatabaseSecretsMount#id}. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.influxdb">Influxdb</a></code> | <code>object</code> | influxdb block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.local">Local</a></code> | <code>object</code> | Local mount flag that can be explicitly set to true to enforce local mount in HA environment. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.maxLeaseTtlSeconds">MaxLeaseTtlSeconds</a></code> | <code>double</code> | Maximum possible lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mongodb">Mongodb</a></code> | <code>object</code> | mongodb block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mongodbatlas">Mongodbatlas</a></code> | <code>object</code> | mongodbatlas block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mssql">Mssql</a></code> | <code>object</code> | mssql block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mysql">Mysql</a></code> | <code>object</code> | mysql block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mysqlAurora">MysqlAurora</a></code> | <code>object</code> | mysql_aurora block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mysqlLegacy">MysqlLegacy</a></code> | <code>object</code> | mysql_legacy block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mysqlRds">MysqlRds</a></code> | <code>object</code> | mysql_rds block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Specifies mount type specific options that are passed to the backend. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.oracle">Oracle</a></code> | <code>object</code> | oracle block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.postgresql">Postgresql</a></code> | <code>object</code> | postgresql block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.redis">Redis</a></code> | <code>object</code> | redis block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.redisElasticache">RedisElasticache</a></code> | <code>object</code> | redis_elasticache block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.redshift">Redshift</a></code> | <code>object</code> | redshift block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.sealWrap">SealWrap</a></code> | <code>object</code> | Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.snowflake">Snowflake</a></code> | <code>object</code> | snowflake block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Where the secret backend will be mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#path DatabaseSecretsMount#path}

---

##### `AllowedManagedKeys`<sup>Optional</sup> <a name="AllowedManagedKeys" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.allowedManagedKeys"></a>

```csharp
public string[] AllowedManagedKeys { get; set; }
```

- *Type:* string[]

List of managed key registry entry names that the mount in question is allowed to access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#allowed_managed_keys DatabaseSecretsMount#allowed_managed_keys}

---

##### `AuditNonHmacRequestKeys`<sup>Optional</sup> <a name="AuditNonHmacRequestKeys" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.auditNonHmacRequestKeys"></a>

```csharp
public string[] AuditNonHmacRequestKeys { get; set; }
```

- *Type:* string[]

Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#audit_non_hmac_request_keys DatabaseSecretsMount#audit_non_hmac_request_keys}

---

##### `AuditNonHmacResponseKeys`<sup>Optional</sup> <a name="AuditNonHmacResponseKeys" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.auditNonHmacResponseKeys"></a>

```csharp
public string[] AuditNonHmacResponseKeys { get; set; }
```

- *Type:* string[]

Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#audit_non_hmac_response_keys DatabaseSecretsMount#audit_non_hmac_response_keys}

---

##### `Cassandra`<sup>Optional</sup> <a name="Cassandra" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.cassandra"></a>

```csharp
public object Cassandra { get; set; }
```

- *Type:* object

cassandra block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#cassandra DatabaseSecretsMount#cassandra}

---

##### `Couchbase`<sup>Optional</sup> <a name="Couchbase" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.couchbase"></a>

```csharp
public object Couchbase { get; set; }
```

- *Type:* object

couchbase block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#couchbase DatabaseSecretsMount#couchbase}

---

##### `DefaultLeaseTtlSeconds`<sup>Optional</sup> <a name="DefaultLeaseTtlSeconds" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.defaultLeaseTtlSeconds"></a>

```csharp
public double DefaultLeaseTtlSeconds { get; set; }
```

- *Type:* double

Default lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#default_lease_ttl_seconds DatabaseSecretsMount#default_lease_ttl_seconds}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Human-friendly description of the mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#description DatabaseSecretsMount#description}

---

##### `Elasticsearch`<sup>Optional</sup> <a name="Elasticsearch" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.elasticsearch"></a>

```csharp
public object Elasticsearch { get; set; }
```

- *Type:* object

elasticsearch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#elasticsearch DatabaseSecretsMount#elasticsearch}

---

##### `ExternalEntropyAccess`<sup>Optional</sup> <a name="ExternalEntropyAccess" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.externalEntropyAccess"></a>

```csharp
public object ExternalEntropyAccess { get; set; }
```

- *Type:* object

Enable the secrets engine to access Vault's external entropy source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#external_entropy_access DatabaseSecretsMount#external_entropy_access}

---

##### `Hana`<sup>Optional</sup> <a name="Hana" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.hana"></a>

```csharp
public object Hana { get; set; }
```

- *Type:* object

hana block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#hana DatabaseSecretsMount#hana}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#id DatabaseSecretsMount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Influxdb`<sup>Optional</sup> <a name="Influxdb" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.influxdb"></a>

```csharp
public object Influxdb { get; set; }
```

- *Type:* object

influxdb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#influxdb DatabaseSecretsMount#influxdb}

---

##### `Local`<sup>Optional</sup> <a name="Local" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.local"></a>

```csharp
public object Local { get; set; }
```

- *Type:* object

Local mount flag that can be explicitly set to true to enforce local mount in HA environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#local DatabaseSecretsMount#local}

---

##### `MaxLeaseTtlSeconds`<sup>Optional</sup> <a name="MaxLeaseTtlSeconds" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.maxLeaseTtlSeconds"></a>

```csharp
public double MaxLeaseTtlSeconds { get; set; }
```

- *Type:* double

Maximum possible lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#max_lease_ttl_seconds DatabaseSecretsMount#max_lease_ttl_seconds}

---

##### `Mongodb`<sup>Optional</sup> <a name="Mongodb" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mongodb"></a>

```csharp
public object Mongodb { get; set; }
```

- *Type:* object

mongodb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#mongodb DatabaseSecretsMount#mongodb}

---

##### `Mongodbatlas`<sup>Optional</sup> <a name="Mongodbatlas" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mongodbatlas"></a>

```csharp
public object Mongodbatlas { get; set; }
```

- *Type:* object

mongodbatlas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#mongodbatlas DatabaseSecretsMount#mongodbatlas}

---

##### `Mssql`<sup>Optional</sup> <a name="Mssql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mssql"></a>

```csharp
public object Mssql { get; set; }
```

- *Type:* object

mssql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#mssql DatabaseSecretsMount#mssql}

---

##### `Mysql`<sup>Optional</sup> <a name="Mysql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mysql"></a>

```csharp
public object Mysql { get; set; }
```

- *Type:* object

mysql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#mysql DatabaseSecretsMount#mysql}

---

##### `MysqlAurora`<sup>Optional</sup> <a name="MysqlAurora" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mysqlAurora"></a>

```csharp
public object MysqlAurora { get; set; }
```

- *Type:* object

mysql_aurora block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#mysql_aurora DatabaseSecretsMount#mysql_aurora}

---

##### `MysqlLegacy`<sup>Optional</sup> <a name="MysqlLegacy" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mysqlLegacy"></a>

```csharp
public object MysqlLegacy { get; set; }
```

- *Type:* object

mysql_legacy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#mysql_legacy DatabaseSecretsMount#mysql_legacy}

---

##### `MysqlRds`<sup>Optional</sup> <a name="MysqlRds" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.mysqlRds"></a>

```csharp
public object MysqlRds { get; set; }
```

- *Type:* object

mysql_rds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#mysql_rds DatabaseSecretsMount#mysql_rds}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#namespace DatabaseSecretsMount#namespace}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Specifies mount type specific options that are passed to the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#options DatabaseSecretsMount#options}

---

##### `Oracle`<sup>Optional</sup> <a name="Oracle" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.oracle"></a>

```csharp
public object Oracle { get; set; }
```

- *Type:* object

oracle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#oracle DatabaseSecretsMount#oracle}

---

##### `Postgresql`<sup>Optional</sup> <a name="Postgresql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.postgresql"></a>

```csharp
public object Postgresql { get; set; }
```

- *Type:* object

postgresql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#postgresql DatabaseSecretsMount#postgresql}

---

##### `Redis`<sup>Optional</sup> <a name="Redis" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.redis"></a>

```csharp
public object Redis { get; set; }
```

- *Type:* object

redis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#redis DatabaseSecretsMount#redis}

---

##### `RedisElasticache`<sup>Optional</sup> <a name="RedisElasticache" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.redisElasticache"></a>

```csharp
public object RedisElasticache { get; set; }
```

- *Type:* object

redis_elasticache block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#redis_elasticache DatabaseSecretsMount#redis_elasticache}

---

##### `Redshift`<sup>Optional</sup> <a name="Redshift" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.redshift"></a>

```csharp
public object Redshift { get; set; }
```

- *Type:* object

redshift block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#redshift DatabaseSecretsMount#redshift}

---

##### `SealWrap`<sup>Optional</sup> <a name="SealWrap" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.sealWrap"></a>

```csharp
public object SealWrap { get; set; }
```

- *Type:* object

Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#seal_wrap DatabaseSecretsMount#seal_wrap}

---

##### `Snowflake`<sup>Optional</sup> <a name="Snowflake" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountConfig.property.snowflake"></a>

```csharp
public object Snowflake { get; set; }
```

- *Type:* object

snowflake block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#snowflake DatabaseSecretsMount#snowflake}

---

### DatabaseSecretsMountCouchbase <a name="DatabaseSecretsMountCouchbase" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountCouchbase {
    string[] Hosts,
    string Name,
    string Password,
    string Username,
    string[] AllowedRoles = null,
    string Base64Pem = null,
    string BucketName = null,
    System.Collections.Generic.IDictionary<string, string> Data = null,
    object InsecureTls = null,
    string PluginName = null,
    string[] RootRotationStatements = null,
    object Tls = null,
    string UsernameTemplate = null,
    object VerifyConnection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.hosts">Hosts</a></code> | <code>string[]</code> | A set of Couchbase URIs to connect to. Must use `couchbases://` scheme if `tls` is `true`. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.name">Name</a></code> | <code>string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.password">Password</a></code> | <code>string</code> | Specifies the password corresponding to the given username. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.username">Username</a></code> | <code>string</code> | Specifies the username for Vault to use. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.base64Pem">Base64Pem</a></code> | <code>string</code> | Required if `tls` is `true`. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.bucketName">BucketName</a></code> | <code>string</code> | Required for Couchbase versions prior to 6.5.0. This is only used to verify vault's connection to the server. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.data">Data</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.insecureTls">InsecureTls</a></code> | <code>object</code> | Specifies whether to skip verification of the server certificate when using TLS. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.pluginName">PluginName</a></code> | <code>string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.rootRotationStatements">RootRotationStatements</a></code> | <code>string[]</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.tls">Tls</a></code> | <code>object</code> | Specifies whether to use TLS when connecting to Couchbase. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.usernameTemplate">UsernameTemplate</a></code> | <code>string</code> | Template describing how dynamic usernames are generated. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.verifyConnection">VerifyConnection</a></code> | <code>object</code> | Specifies if the connection is verified during initial configuration. |

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.hosts"></a>

```csharp
public string[] Hosts { get; set; }
```

- *Type:* string[]

A set of Couchbase URIs to connect to. Must use `couchbases://` scheme if `tls` is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#hosts DatabaseSecretsMount#hosts}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Specifies the password corresponding to the given username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Specifies the username for Vault to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; set; }
```

- *Type:* string[]

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `Base64Pem`<sup>Optional</sup> <a name="Base64Pem" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.base64Pem"></a>

```csharp
public string Base64Pem { get; set; }
```

- *Type:* string

Required if `tls` is `true`.

Specifies the certificate authority of the Couchbase server, as a PEM certificate that has been base64 encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#base64_pem DatabaseSecretsMount#base64_pem}

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Required for Couchbase versions prior to 6.5.0. This is only used to verify vault's connection to the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#bucket_name DatabaseSecretsMount#bucket_name}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.data"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Data { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `InsecureTls`<sup>Optional</sup> <a name="InsecureTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.insecureTls"></a>

```csharp
public object InsecureTls { get; set; }
```

- *Type:* object

Specifies whether to skip verification of the server certificate when using TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#insecure_tls DatabaseSecretsMount#insecure_tls}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.pluginName"></a>

```csharp
public string PluginName { get; set; }
```

- *Type:* string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `RootRotationStatements`<sup>Optional</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.rootRotationStatements"></a>

```csharp
public string[] RootRotationStatements { get; set; }
```

- *Type:* string[]

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `Tls`<sup>Optional</sup> <a name="Tls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.tls"></a>

```csharp
public object Tls { get; set; }
```

- *Type:* object

Specifies whether to use TLS when connecting to Couchbase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#tls DatabaseSecretsMount#tls}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.usernameTemplate"></a>

```csharp
public string UsernameTemplate { get; set; }
```

- *Type:* string

Template describing how dynamic usernames are generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#username_template DatabaseSecretsMount#username_template}

---

##### `VerifyConnection`<sup>Optional</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbase.property.verifyConnection"></a>

```csharp
public object VerifyConnection { get; set; }
```

- *Type:* object

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountElasticsearch <a name="DatabaseSecretsMountElasticsearch" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountElasticsearch {
    string Name,
    string Password,
    string Url,
    string Username,
    string[] AllowedRoles = null,
    string CaCert = null,
    string CaPath = null,
    string ClientCert = null,
    string ClientKey = null,
    System.Collections.Generic.IDictionary<string, string> Data = null,
    object Insecure = null,
    string PluginName = null,
    string[] RootRotationStatements = null,
    string TlsServerName = null,
    string UsernameTemplate = null,
    object VerifyConnection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.name">Name</a></code> | <code>string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.password">Password</a></code> | <code>string</code> | The password to be used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.url">Url</a></code> | <code>string</code> | The URL for Elasticsearch's API. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.username">Username</a></code> | <code>string</code> | The username to be used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.caCert">CaCert</a></code> | <code>string</code> | The path to a PEM-encoded CA cert file to use to verify the Elasticsearch server's identity. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.caPath">CaPath</a></code> | <code>string</code> | The path to a directory of PEM-encoded CA cert files to use to verify the Elasticsearch server's identity. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.clientCert">ClientCert</a></code> | <code>string</code> | The path to the certificate for the Elasticsearch client to present for communication. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.clientKey">ClientKey</a></code> | <code>string</code> | The path to the key for the Elasticsearch client to use for communication. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.data">Data</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.insecure">Insecure</a></code> | <code>object</code> | Whether to disable certificate verification. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.pluginName">PluginName</a></code> | <code>string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.rootRotationStatements">RootRotationStatements</a></code> | <code>string[]</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.tlsServerName">TlsServerName</a></code> | <code>string</code> | This, if set, is used to set the SNI host when connecting via TLS. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.usernameTemplate">UsernameTemplate</a></code> | <code>string</code> | Template describing how dynamic usernames are generated. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.verifyConnection">VerifyConnection</a></code> | <code>object</code> | Specifies if the connection is verified during initial configuration. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The password to be used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

The URL for Elasticsearch's API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#url DatabaseSecretsMount#url}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The username to be used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; set; }
```

- *Type:* string[]

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `CaCert`<sup>Optional</sup> <a name="CaCert" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.caCert"></a>

```csharp
public string CaCert { get; set; }
```

- *Type:* string

The path to a PEM-encoded CA cert file to use to verify the Elasticsearch server's identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#ca_cert DatabaseSecretsMount#ca_cert}

---

##### `CaPath`<sup>Optional</sup> <a name="CaPath" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.caPath"></a>

```csharp
public string CaPath { get; set; }
```

- *Type:* string

The path to a directory of PEM-encoded CA cert files to use to verify the Elasticsearch server's identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#ca_path DatabaseSecretsMount#ca_path}

---

##### `ClientCert`<sup>Optional</sup> <a name="ClientCert" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.clientCert"></a>

```csharp
public string ClientCert { get; set; }
```

- *Type:* string

The path to the certificate for the Elasticsearch client to present for communication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#client_cert DatabaseSecretsMount#client_cert}

---

##### `ClientKey`<sup>Optional</sup> <a name="ClientKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.clientKey"></a>

```csharp
public string ClientKey { get; set; }
```

- *Type:* string

The path to the key for the Elasticsearch client to use for communication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#client_key DatabaseSecretsMount#client_key}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.data"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Data { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.insecure"></a>

```csharp
public object Insecure { get; set; }
```

- *Type:* object

Whether to disable certificate verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#insecure DatabaseSecretsMount#insecure}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.pluginName"></a>

```csharp
public string PluginName { get; set; }
```

- *Type:* string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `RootRotationStatements`<sup>Optional</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.rootRotationStatements"></a>

```csharp
public string[] RootRotationStatements { get; set; }
```

- *Type:* string[]

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `TlsServerName`<sup>Optional</sup> <a name="TlsServerName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.tlsServerName"></a>

```csharp
public string TlsServerName { get; set; }
```

- *Type:* string

This, if set, is used to set the SNI host when connecting via TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#tls_server_name DatabaseSecretsMount#tls_server_name}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.usernameTemplate"></a>

```csharp
public string UsernameTemplate { get; set; }
```

- *Type:* string

Template describing how dynamic usernames are generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#username_template DatabaseSecretsMount#username_template}

---

##### `VerifyConnection`<sup>Optional</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearch.property.verifyConnection"></a>

```csharp
public object VerifyConnection { get; set; }
```

- *Type:* object

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountHana <a name="DatabaseSecretsMountHana" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountHana {
    string Name,
    string[] AllowedRoles = null,
    string ConnectionUrl = null,
    System.Collections.Generic.IDictionary<string, string> Data = null,
    object DisableEscaping = null,
    double MaxConnectionLifetime = null,
    double MaxIdleConnections = null,
    double MaxOpenConnections = null,
    string Password = null,
    string PluginName = null,
    string[] RootRotationStatements = null,
    string Username = null,
    object VerifyConnection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.name">Name</a></code> | <code>string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.connectionUrl">ConnectionUrl</a></code> | <code>string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.data">Data</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.disableEscaping">DisableEscaping</a></code> | <code>object</code> | Disable special character escaping in username and password. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>double</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>double</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>double</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.password">Password</a></code> | <code>string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.pluginName">PluginName</a></code> | <code>string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.rootRotationStatements">RootRotationStatements</a></code> | <code>string[]</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.username">Username</a></code> | <code>string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.verifyConnection">VerifyConnection</a></code> | <code>object</code> | Specifies if the connection is verified during initial configuration. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; set; }
```

- *Type:* string[]

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `ConnectionUrl`<sup>Optional</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.connectionUrl"></a>

```csharp
public string ConnectionUrl { get; set; }
```

- *Type:* string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.data"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Data { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `DisableEscaping`<sup>Optional</sup> <a name="DisableEscaping" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.disableEscaping"></a>

```csharp
public object DisableEscaping { get; set; }
```

- *Type:* object

Disable special character escaping in username and password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#disable_escaping DatabaseSecretsMount#disable_escaping}

---

##### `MaxConnectionLifetime`<sup>Optional</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.maxConnectionLifetime"></a>

```csharp
public double MaxConnectionLifetime { get; set; }
```

- *Type:* double

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}

---

##### `MaxIdleConnections`<sup>Optional</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.maxIdleConnections"></a>

```csharp
public double MaxIdleConnections { get; set; }
```

- *Type:* double

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}

---

##### `MaxOpenConnections`<sup>Optional</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.maxOpenConnections"></a>

```csharp
public double MaxOpenConnections { get; set; }
```

- *Type:* double

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.pluginName"></a>

```csharp
public string PluginName { get; set; }
```

- *Type:* string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `RootRotationStatements`<sup>Optional</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.rootRotationStatements"></a>

```csharp
public string[] RootRotationStatements { get; set; }
```

- *Type:* string[]

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `VerifyConnection`<sup>Optional</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHana.property.verifyConnection"></a>

```csharp
public object VerifyConnection { get; set; }
```

- *Type:* object

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountInfluxdb <a name="DatabaseSecretsMountInfluxdb" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountInfluxdb {
    string Host,
    string Name,
    string Password,
    string Username,
    string[] AllowedRoles = null,
    double ConnectTimeout = null,
    System.Collections.Generic.IDictionary<string, string> Data = null,
    object InsecureTls = null,
    string PemBundle = null,
    string PemJson = null,
    string PluginName = null,
    double Port = null,
    string[] RootRotationStatements = null,
    object Tls = null,
    string UsernameTemplate = null,
    object VerifyConnection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.host">Host</a></code> | <code>string</code> | Influxdb host to connect to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.name">Name</a></code> | <code>string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.password">Password</a></code> | <code>string</code> | Specifies the password corresponding to the given username. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.username">Username</a></code> | <code>string</code> | Specifies the username to use for superuser access. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.connectTimeout">ConnectTimeout</a></code> | <code>double</code> | The number of seconds to use as a connection timeout. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.data">Data</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.insecureTls">InsecureTls</a></code> | <code>object</code> | Whether to skip verification of the server certificate when using TLS. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.pemBundle">PemBundle</a></code> | <code>string</code> | Concatenated PEM blocks containing a certificate and private key; |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.pemJson">PemJson</a></code> | <code>string</code> | Specifies JSON containing a certificate and private key; |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.pluginName">PluginName</a></code> | <code>string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.port">Port</a></code> | <code>double</code> | The transport port to use to connect to Influxdb. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.rootRotationStatements">RootRotationStatements</a></code> | <code>string[]</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.tls">Tls</a></code> | <code>object</code> | Whether to use TLS when connecting to Influxdb. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.usernameTemplate">UsernameTemplate</a></code> | <code>string</code> | Template describing how dynamic usernames are generated. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.verifyConnection">VerifyConnection</a></code> | <code>object</code> | Specifies if the connection is verified during initial configuration. |

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Influxdb host to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#host DatabaseSecretsMount#host}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Specifies the password corresponding to the given username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Specifies the username to use for superuser access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; set; }
```

- *Type:* string[]

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `ConnectTimeout`<sup>Optional</sup> <a name="ConnectTimeout" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.connectTimeout"></a>

```csharp
public double ConnectTimeout { get; set; }
```

- *Type:* double

The number of seconds to use as a connection timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#connect_timeout DatabaseSecretsMount#connect_timeout}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.data"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Data { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `InsecureTls`<sup>Optional</sup> <a name="InsecureTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.insecureTls"></a>

```csharp
public object InsecureTls { get; set; }
```

- *Type:* object

Whether to skip verification of the server certificate when using TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#insecure_tls DatabaseSecretsMount#insecure_tls}

---

##### `PemBundle`<sup>Optional</sup> <a name="PemBundle" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.pemBundle"></a>

```csharp
public string PemBundle { get; set; }
```

- *Type:* string

Concatenated PEM blocks containing a certificate and private key;

a certificate, private key, and issuing CA certificate; or just a CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#pem_bundle DatabaseSecretsMount#pem_bundle}

---

##### `PemJson`<sup>Optional</sup> <a name="PemJson" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.pemJson"></a>

```csharp
public string PemJson { get; set; }
```

- *Type:* string

Specifies JSON containing a certificate and private key;

a certificate, private key, and issuing CA certificate; or just a CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#pem_json DatabaseSecretsMount#pem_json}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.pluginName"></a>

```csharp
public string PluginName { get; set; }
```

- *Type:* string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The transport port to use to connect to Influxdb.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#port DatabaseSecretsMount#port}

---

##### `RootRotationStatements`<sup>Optional</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.rootRotationStatements"></a>

```csharp
public string[] RootRotationStatements { get; set; }
```

- *Type:* string[]

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `Tls`<sup>Optional</sup> <a name="Tls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.tls"></a>

```csharp
public object Tls { get; set; }
```

- *Type:* object

Whether to use TLS when connecting to Influxdb.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#tls DatabaseSecretsMount#tls}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.usernameTemplate"></a>

```csharp
public string UsernameTemplate { get; set; }
```

- *Type:* string

Template describing how dynamic usernames are generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#username_template DatabaseSecretsMount#username_template}

---

##### `VerifyConnection`<sup>Optional</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdb.property.verifyConnection"></a>

```csharp
public object VerifyConnection { get; set; }
```

- *Type:* object

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountMongodb <a name="DatabaseSecretsMountMongodb" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountMongodb {
    string Name,
    string[] AllowedRoles = null,
    string ConnectionUrl = null,
    System.Collections.Generic.IDictionary<string, string> Data = null,
    double MaxConnectionLifetime = null,
    double MaxIdleConnections = null,
    double MaxOpenConnections = null,
    string Password = null,
    string PluginName = null,
    string[] RootRotationStatements = null,
    string Username = null,
    string UsernameTemplate = null,
    object VerifyConnection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.name">Name</a></code> | <code>string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.connectionUrl">ConnectionUrl</a></code> | <code>string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.data">Data</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>double</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>double</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>double</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.password">Password</a></code> | <code>string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.pluginName">PluginName</a></code> | <code>string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.rootRotationStatements">RootRotationStatements</a></code> | <code>string[]</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.username">Username</a></code> | <code>string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.usernameTemplate">UsernameTemplate</a></code> | <code>string</code> | Username generation template. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.verifyConnection">VerifyConnection</a></code> | <code>object</code> | Specifies if the connection is verified during initial configuration. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; set; }
```

- *Type:* string[]

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `ConnectionUrl`<sup>Optional</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.connectionUrl"></a>

```csharp
public string ConnectionUrl { get; set; }
```

- *Type:* string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.data"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Data { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `MaxConnectionLifetime`<sup>Optional</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.maxConnectionLifetime"></a>

```csharp
public double MaxConnectionLifetime { get; set; }
```

- *Type:* double

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}

---

##### `MaxIdleConnections`<sup>Optional</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.maxIdleConnections"></a>

```csharp
public double MaxIdleConnections { get; set; }
```

- *Type:* double

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}

---

##### `MaxOpenConnections`<sup>Optional</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.maxOpenConnections"></a>

```csharp
public double MaxOpenConnections { get; set; }
```

- *Type:* double

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.pluginName"></a>

```csharp
public string PluginName { get; set; }
```

- *Type:* string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `RootRotationStatements`<sup>Optional</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.rootRotationStatements"></a>

```csharp
public string[] RootRotationStatements { get; set; }
```

- *Type:* string[]

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.usernameTemplate"></a>

```csharp
public string UsernameTemplate { get; set; }
```

- *Type:* string

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#username_template DatabaseSecretsMount#username_template}

---

##### `VerifyConnection`<sup>Optional</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodb.property.verifyConnection"></a>

```csharp
public object VerifyConnection { get; set; }
```

- *Type:* object

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountMongodbatlas <a name="DatabaseSecretsMountMongodbatlas" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountMongodbatlas {
    string Name,
    string PrivateKey,
    string ProjectId,
    string PublicKey,
    string[] AllowedRoles = null,
    System.Collections.Generic.IDictionary<string, string> Data = null,
    string PluginName = null,
    string[] RootRotationStatements = null,
    object VerifyConnection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.name">Name</a></code> | <code>string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.privateKey">PrivateKey</a></code> | <code>string</code> | The Private Programmatic API Key used to connect with MongoDB Atlas API. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.projectId">ProjectId</a></code> | <code>string</code> | The Project ID the Database User should be created within. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.publicKey">PublicKey</a></code> | <code>string</code> | The Public Programmatic API Key used to authenticate with the MongoDB Atlas API. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.data">Data</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.pluginName">PluginName</a></code> | <code>string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.rootRotationStatements">RootRotationStatements</a></code> | <code>string[]</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.verifyConnection">VerifyConnection</a></code> | <code>object</code> | Specifies if the connection is verified during initial configuration. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.privateKey"></a>

```csharp
public string PrivateKey { get; set; }
```

- *Type:* string

The Private Programmatic API Key used to connect with MongoDB Atlas API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#private_key DatabaseSecretsMount#private_key}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The Project ID the Database User should be created within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#project_id DatabaseSecretsMount#project_id}

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.publicKey"></a>

```csharp
public string PublicKey { get; set; }
```

- *Type:* string

The Public Programmatic API Key used to authenticate with the MongoDB Atlas API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#public_key DatabaseSecretsMount#public_key}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; set; }
```

- *Type:* string[]

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.data"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Data { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.pluginName"></a>

```csharp
public string PluginName { get; set; }
```

- *Type:* string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `RootRotationStatements`<sup>Optional</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.rootRotationStatements"></a>

```csharp
public string[] RootRotationStatements { get; set; }
```

- *Type:* string[]

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `VerifyConnection`<sup>Optional</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlas.property.verifyConnection"></a>

```csharp
public object VerifyConnection { get; set; }
```

- *Type:* object

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountMssql <a name="DatabaseSecretsMountMssql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountMssql {
    string Name,
    string[] AllowedRoles = null,
    string ConnectionUrl = null,
    object ContainedDb = null,
    System.Collections.Generic.IDictionary<string, string> Data = null,
    object DisableEscaping = null,
    double MaxConnectionLifetime = null,
    double MaxIdleConnections = null,
    double MaxOpenConnections = null,
    string Password = null,
    string PluginName = null,
    string[] RootRotationStatements = null,
    string Username = null,
    string UsernameTemplate = null,
    object VerifyConnection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.name">Name</a></code> | <code>string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.connectionUrl">ConnectionUrl</a></code> | <code>string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.containedDb">ContainedDb</a></code> | <code>object</code> | Set to true when the target is a Contained Database, e.g. AzureSQL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.data">Data</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.disableEscaping">DisableEscaping</a></code> | <code>object</code> | Disable special character escaping in username and password. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>double</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>double</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>double</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.password">Password</a></code> | <code>string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.pluginName">PluginName</a></code> | <code>string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.rootRotationStatements">RootRotationStatements</a></code> | <code>string[]</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.username">Username</a></code> | <code>string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.usernameTemplate">UsernameTemplate</a></code> | <code>string</code> | Username generation template. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.verifyConnection">VerifyConnection</a></code> | <code>object</code> | Specifies if the connection is verified during initial configuration. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; set; }
```

- *Type:* string[]

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `ConnectionUrl`<sup>Optional</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.connectionUrl"></a>

```csharp
public string ConnectionUrl { get; set; }
```

- *Type:* string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}

---

##### `ContainedDb`<sup>Optional</sup> <a name="ContainedDb" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.containedDb"></a>

```csharp
public object ContainedDb { get; set; }
```

- *Type:* object

Set to true when the target is a Contained Database, e.g. AzureSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#contained_db DatabaseSecretsMount#contained_db}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.data"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Data { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `DisableEscaping`<sup>Optional</sup> <a name="DisableEscaping" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.disableEscaping"></a>

```csharp
public object DisableEscaping { get; set; }
```

- *Type:* object

Disable special character escaping in username and password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#disable_escaping DatabaseSecretsMount#disable_escaping}

---

##### `MaxConnectionLifetime`<sup>Optional</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.maxConnectionLifetime"></a>

```csharp
public double MaxConnectionLifetime { get; set; }
```

- *Type:* double

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}

---

##### `MaxIdleConnections`<sup>Optional</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.maxIdleConnections"></a>

```csharp
public double MaxIdleConnections { get; set; }
```

- *Type:* double

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}

---

##### `MaxOpenConnections`<sup>Optional</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.maxOpenConnections"></a>

```csharp
public double MaxOpenConnections { get; set; }
```

- *Type:* double

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.pluginName"></a>

```csharp
public string PluginName { get; set; }
```

- *Type:* string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `RootRotationStatements`<sup>Optional</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.rootRotationStatements"></a>

```csharp
public string[] RootRotationStatements { get; set; }
```

- *Type:* string[]

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.usernameTemplate"></a>

```csharp
public string UsernameTemplate { get; set; }
```

- *Type:* string

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#username_template DatabaseSecretsMount#username_template}

---

##### `VerifyConnection`<sup>Optional</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssql.property.verifyConnection"></a>

```csharp
public object VerifyConnection { get; set; }
```

- *Type:* object

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountMysql <a name="DatabaseSecretsMountMysql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountMysql {
    string Name,
    string[] AllowedRoles = null,
    string AuthType = null,
    string ConnectionUrl = null,
    System.Collections.Generic.IDictionary<string, string> Data = null,
    double MaxConnectionLifetime = null,
    double MaxIdleConnections = null,
    double MaxOpenConnections = null,
    string Password = null,
    string PluginName = null,
    string[] RootRotationStatements = null,
    string ServiceAccountJson = null,
    string TlsCa = null,
    string TlsCertificateKey = null,
    string Username = null,
    string UsernameTemplate = null,
    object VerifyConnection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.name">Name</a></code> | <code>string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.authType">AuthType</a></code> | <code>string</code> | Specify alternative authorization type. (Only 'gcp_iam' is valid currently). |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.connectionUrl">ConnectionUrl</a></code> | <code>string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.data">Data</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>double</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>double</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>double</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.password">Password</a></code> | <code>string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.pluginName">PluginName</a></code> | <code>string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.rootRotationStatements">RootRotationStatements</a></code> | <code>string[]</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.serviceAccountJson">ServiceAccountJson</a></code> | <code>string</code> | A JSON encoded credential for use with IAM authorization. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.tlsCa">TlsCa</a></code> | <code>string</code> | x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.tlsCertificateKey">TlsCertificateKey</a></code> | <code>string</code> | x509 certificate for connecting to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.username">Username</a></code> | <code>string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.usernameTemplate">UsernameTemplate</a></code> | <code>string</code> | Username generation template. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.verifyConnection">VerifyConnection</a></code> | <code>object</code> | Specifies if the connection is verified during initial configuration. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; set; }
```

- *Type:* string[]

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.authType"></a>

```csharp
public string AuthType { get; set; }
```

- *Type:* string

Specify alternative authorization type. (Only 'gcp_iam' is valid currently).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#auth_type DatabaseSecretsMount#auth_type}

---

##### `ConnectionUrl`<sup>Optional</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.connectionUrl"></a>

```csharp
public string ConnectionUrl { get; set; }
```

- *Type:* string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.data"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Data { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `MaxConnectionLifetime`<sup>Optional</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.maxConnectionLifetime"></a>

```csharp
public double MaxConnectionLifetime { get; set; }
```

- *Type:* double

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}

---

##### `MaxIdleConnections`<sup>Optional</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.maxIdleConnections"></a>

```csharp
public double MaxIdleConnections { get; set; }
```

- *Type:* double

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}

---

##### `MaxOpenConnections`<sup>Optional</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.maxOpenConnections"></a>

```csharp
public double MaxOpenConnections { get; set; }
```

- *Type:* double

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.pluginName"></a>

```csharp
public string PluginName { get; set; }
```

- *Type:* string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `RootRotationStatements`<sup>Optional</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.rootRotationStatements"></a>

```csharp
public string[] RootRotationStatements { get; set; }
```

- *Type:* string[]

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `ServiceAccountJson`<sup>Optional</sup> <a name="ServiceAccountJson" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.serviceAccountJson"></a>

```csharp
public string ServiceAccountJson { get; set; }
```

- *Type:* string

A JSON encoded credential for use with IAM authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#service_account_json DatabaseSecretsMount#service_account_json}

---

##### `TlsCa`<sup>Optional</sup> <a name="TlsCa" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.tlsCa"></a>

```csharp
public string TlsCa { get; set; }
```

- *Type:* string

x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#tls_ca DatabaseSecretsMount#tls_ca}

---

##### `TlsCertificateKey`<sup>Optional</sup> <a name="TlsCertificateKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.tlsCertificateKey"></a>

```csharp
public string TlsCertificateKey { get; set; }
```

- *Type:* string

x509 certificate for connecting to the database.

This must be a PEM encoded version of the private key and the certificate combined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#tls_certificate_key DatabaseSecretsMount#tls_certificate_key}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.usernameTemplate"></a>

```csharp
public string UsernameTemplate { get; set; }
```

- *Type:* string

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#username_template DatabaseSecretsMount#username_template}

---

##### `VerifyConnection`<sup>Optional</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysql.property.verifyConnection"></a>

```csharp
public object VerifyConnection { get; set; }
```

- *Type:* object

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountMysqlAurora <a name="DatabaseSecretsMountMysqlAurora" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountMysqlAurora {
    string Name,
    string[] AllowedRoles = null,
    string ConnectionUrl = null,
    System.Collections.Generic.IDictionary<string, string> Data = null,
    double MaxConnectionLifetime = null,
    double MaxIdleConnections = null,
    double MaxOpenConnections = null,
    string Password = null,
    string PluginName = null,
    string[] RootRotationStatements = null,
    string Username = null,
    string UsernameTemplate = null,
    object VerifyConnection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.name">Name</a></code> | <code>string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.connectionUrl">ConnectionUrl</a></code> | <code>string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.data">Data</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>double</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>double</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>double</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.password">Password</a></code> | <code>string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.pluginName">PluginName</a></code> | <code>string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.rootRotationStatements">RootRotationStatements</a></code> | <code>string[]</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.username">Username</a></code> | <code>string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.usernameTemplate">UsernameTemplate</a></code> | <code>string</code> | Username generation template. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.verifyConnection">VerifyConnection</a></code> | <code>object</code> | Specifies if the connection is verified during initial configuration. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; set; }
```

- *Type:* string[]

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `ConnectionUrl`<sup>Optional</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.connectionUrl"></a>

```csharp
public string ConnectionUrl { get; set; }
```

- *Type:* string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.data"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Data { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `MaxConnectionLifetime`<sup>Optional</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.maxConnectionLifetime"></a>

```csharp
public double MaxConnectionLifetime { get; set; }
```

- *Type:* double

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}

---

##### `MaxIdleConnections`<sup>Optional</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.maxIdleConnections"></a>

```csharp
public double MaxIdleConnections { get; set; }
```

- *Type:* double

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}

---

##### `MaxOpenConnections`<sup>Optional</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.maxOpenConnections"></a>

```csharp
public double MaxOpenConnections { get; set; }
```

- *Type:* double

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.pluginName"></a>

```csharp
public string PluginName { get; set; }
```

- *Type:* string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `RootRotationStatements`<sup>Optional</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.rootRotationStatements"></a>

```csharp
public string[] RootRotationStatements { get; set; }
```

- *Type:* string[]

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.usernameTemplate"></a>

```csharp
public string UsernameTemplate { get; set; }
```

- *Type:* string

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#username_template DatabaseSecretsMount#username_template}

---

##### `VerifyConnection`<sup>Optional</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAurora.property.verifyConnection"></a>

```csharp
public object VerifyConnection { get; set; }
```

- *Type:* object

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountMysqlLegacy <a name="DatabaseSecretsMountMysqlLegacy" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountMysqlLegacy {
    string Name,
    string[] AllowedRoles = null,
    string ConnectionUrl = null,
    System.Collections.Generic.IDictionary<string, string> Data = null,
    double MaxConnectionLifetime = null,
    double MaxIdleConnections = null,
    double MaxOpenConnections = null,
    string Password = null,
    string PluginName = null,
    string[] RootRotationStatements = null,
    string Username = null,
    string UsernameTemplate = null,
    object VerifyConnection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.name">Name</a></code> | <code>string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.connectionUrl">ConnectionUrl</a></code> | <code>string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.data">Data</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>double</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>double</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>double</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.password">Password</a></code> | <code>string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.pluginName">PluginName</a></code> | <code>string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.rootRotationStatements">RootRotationStatements</a></code> | <code>string[]</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.username">Username</a></code> | <code>string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.usernameTemplate">UsernameTemplate</a></code> | <code>string</code> | Username generation template. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.verifyConnection">VerifyConnection</a></code> | <code>object</code> | Specifies if the connection is verified during initial configuration. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; set; }
```

- *Type:* string[]

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `ConnectionUrl`<sup>Optional</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.connectionUrl"></a>

```csharp
public string ConnectionUrl { get; set; }
```

- *Type:* string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.data"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Data { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `MaxConnectionLifetime`<sup>Optional</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.maxConnectionLifetime"></a>

```csharp
public double MaxConnectionLifetime { get; set; }
```

- *Type:* double

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}

---

##### `MaxIdleConnections`<sup>Optional</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.maxIdleConnections"></a>

```csharp
public double MaxIdleConnections { get; set; }
```

- *Type:* double

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}

---

##### `MaxOpenConnections`<sup>Optional</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.maxOpenConnections"></a>

```csharp
public double MaxOpenConnections { get; set; }
```

- *Type:* double

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.pluginName"></a>

```csharp
public string PluginName { get; set; }
```

- *Type:* string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `RootRotationStatements`<sup>Optional</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.rootRotationStatements"></a>

```csharp
public string[] RootRotationStatements { get; set; }
```

- *Type:* string[]

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.usernameTemplate"></a>

```csharp
public string UsernameTemplate { get; set; }
```

- *Type:* string

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#username_template DatabaseSecretsMount#username_template}

---

##### `VerifyConnection`<sup>Optional</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacy.property.verifyConnection"></a>

```csharp
public object VerifyConnection { get; set; }
```

- *Type:* object

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountMysqlRds <a name="DatabaseSecretsMountMysqlRds" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountMysqlRds {
    string Name,
    string[] AllowedRoles = null,
    string ConnectionUrl = null,
    System.Collections.Generic.IDictionary<string, string> Data = null,
    double MaxConnectionLifetime = null,
    double MaxIdleConnections = null,
    double MaxOpenConnections = null,
    string Password = null,
    string PluginName = null,
    string[] RootRotationStatements = null,
    string Username = null,
    string UsernameTemplate = null,
    object VerifyConnection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.name">Name</a></code> | <code>string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.connectionUrl">ConnectionUrl</a></code> | <code>string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.data">Data</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>double</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>double</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>double</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.password">Password</a></code> | <code>string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.pluginName">PluginName</a></code> | <code>string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.rootRotationStatements">RootRotationStatements</a></code> | <code>string[]</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.username">Username</a></code> | <code>string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.usernameTemplate">UsernameTemplate</a></code> | <code>string</code> | Username generation template. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.verifyConnection">VerifyConnection</a></code> | <code>object</code> | Specifies if the connection is verified during initial configuration. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; set; }
```

- *Type:* string[]

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `ConnectionUrl`<sup>Optional</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.connectionUrl"></a>

```csharp
public string ConnectionUrl { get; set; }
```

- *Type:* string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.data"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Data { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `MaxConnectionLifetime`<sup>Optional</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.maxConnectionLifetime"></a>

```csharp
public double MaxConnectionLifetime { get; set; }
```

- *Type:* double

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}

---

##### `MaxIdleConnections`<sup>Optional</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.maxIdleConnections"></a>

```csharp
public double MaxIdleConnections { get; set; }
```

- *Type:* double

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}

---

##### `MaxOpenConnections`<sup>Optional</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.maxOpenConnections"></a>

```csharp
public double MaxOpenConnections { get; set; }
```

- *Type:* double

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.pluginName"></a>

```csharp
public string PluginName { get; set; }
```

- *Type:* string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `RootRotationStatements`<sup>Optional</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.rootRotationStatements"></a>

```csharp
public string[] RootRotationStatements { get; set; }
```

- *Type:* string[]

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.usernameTemplate"></a>

```csharp
public string UsernameTemplate { get; set; }
```

- *Type:* string

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#username_template DatabaseSecretsMount#username_template}

---

##### `VerifyConnection`<sup>Optional</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRds.property.verifyConnection"></a>

```csharp
public object VerifyConnection { get; set; }
```

- *Type:* object

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountOracle <a name="DatabaseSecretsMountOracle" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountOracle {
    string Name,
    string[] AllowedRoles = null,
    string ConnectionUrl = null,
    System.Collections.Generic.IDictionary<string, string> Data = null,
    double MaxConnectionLifetime = null,
    double MaxIdleConnections = null,
    double MaxOpenConnections = null,
    string Password = null,
    string PluginName = null,
    string[] RootRotationStatements = null,
    string Username = null,
    string UsernameTemplate = null,
    object VerifyConnection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.name">Name</a></code> | <code>string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.connectionUrl">ConnectionUrl</a></code> | <code>string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.data">Data</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>double</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>double</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>double</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.password">Password</a></code> | <code>string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.pluginName">PluginName</a></code> | <code>string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.rootRotationStatements">RootRotationStatements</a></code> | <code>string[]</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.username">Username</a></code> | <code>string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.usernameTemplate">UsernameTemplate</a></code> | <code>string</code> | Username generation template. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.verifyConnection">VerifyConnection</a></code> | <code>object</code> | Specifies if the connection is verified during initial configuration. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; set; }
```

- *Type:* string[]

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `ConnectionUrl`<sup>Optional</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.connectionUrl"></a>

```csharp
public string ConnectionUrl { get; set; }
```

- *Type:* string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.data"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Data { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `MaxConnectionLifetime`<sup>Optional</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.maxConnectionLifetime"></a>

```csharp
public double MaxConnectionLifetime { get; set; }
```

- *Type:* double

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}

---

##### `MaxIdleConnections`<sup>Optional</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.maxIdleConnections"></a>

```csharp
public double MaxIdleConnections { get; set; }
```

- *Type:* double

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}

---

##### `MaxOpenConnections`<sup>Optional</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.maxOpenConnections"></a>

```csharp
public double MaxOpenConnections { get; set; }
```

- *Type:* double

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.pluginName"></a>

```csharp
public string PluginName { get; set; }
```

- *Type:* string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `RootRotationStatements`<sup>Optional</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.rootRotationStatements"></a>

```csharp
public string[] RootRotationStatements { get; set; }
```

- *Type:* string[]

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.usernameTemplate"></a>

```csharp
public string UsernameTemplate { get; set; }
```

- *Type:* string

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#username_template DatabaseSecretsMount#username_template}

---

##### `VerifyConnection`<sup>Optional</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracle.property.verifyConnection"></a>

```csharp
public object VerifyConnection { get; set; }
```

- *Type:* object

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountPostgresql <a name="DatabaseSecretsMountPostgresql" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountPostgresql {
    string Name,
    string[] AllowedRoles = null,
    string AuthType = null,
    string ConnectionUrl = null,
    System.Collections.Generic.IDictionary<string, string> Data = null,
    object DisableEscaping = null,
    double MaxConnectionLifetime = null,
    double MaxIdleConnections = null,
    double MaxOpenConnections = null,
    string Password = null,
    string PluginName = null,
    string[] RootRotationStatements = null,
    string ServiceAccountJson = null,
    string Username = null,
    string UsernameTemplate = null,
    object VerifyConnection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.name">Name</a></code> | <code>string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.authType">AuthType</a></code> | <code>string</code> | Specify alternative authorization type. (Only 'gcp_iam' is valid currently). |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.connectionUrl">ConnectionUrl</a></code> | <code>string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.data">Data</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.disableEscaping">DisableEscaping</a></code> | <code>object</code> | Disable special character escaping in username and password. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>double</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>double</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>double</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.password">Password</a></code> | <code>string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.pluginName">PluginName</a></code> | <code>string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.rootRotationStatements">RootRotationStatements</a></code> | <code>string[]</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.serviceAccountJson">ServiceAccountJson</a></code> | <code>string</code> | A JSON encoded credential for use with IAM authorization. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.username">Username</a></code> | <code>string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.usernameTemplate">UsernameTemplate</a></code> | <code>string</code> | Username generation template. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.verifyConnection">VerifyConnection</a></code> | <code>object</code> | Specifies if the connection is verified during initial configuration. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; set; }
```

- *Type:* string[]

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.authType"></a>

```csharp
public string AuthType { get; set; }
```

- *Type:* string

Specify alternative authorization type. (Only 'gcp_iam' is valid currently).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#auth_type DatabaseSecretsMount#auth_type}

---

##### `ConnectionUrl`<sup>Optional</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.connectionUrl"></a>

```csharp
public string ConnectionUrl { get; set; }
```

- *Type:* string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.data"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Data { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `DisableEscaping`<sup>Optional</sup> <a name="DisableEscaping" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.disableEscaping"></a>

```csharp
public object DisableEscaping { get; set; }
```

- *Type:* object

Disable special character escaping in username and password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#disable_escaping DatabaseSecretsMount#disable_escaping}

---

##### `MaxConnectionLifetime`<sup>Optional</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.maxConnectionLifetime"></a>

```csharp
public double MaxConnectionLifetime { get; set; }
```

- *Type:* double

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}

---

##### `MaxIdleConnections`<sup>Optional</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.maxIdleConnections"></a>

```csharp
public double MaxIdleConnections { get; set; }
```

- *Type:* double

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}

---

##### `MaxOpenConnections`<sup>Optional</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.maxOpenConnections"></a>

```csharp
public double MaxOpenConnections { get; set; }
```

- *Type:* double

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.pluginName"></a>

```csharp
public string PluginName { get; set; }
```

- *Type:* string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `RootRotationStatements`<sup>Optional</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.rootRotationStatements"></a>

```csharp
public string[] RootRotationStatements { get; set; }
```

- *Type:* string[]

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `ServiceAccountJson`<sup>Optional</sup> <a name="ServiceAccountJson" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.serviceAccountJson"></a>

```csharp
public string ServiceAccountJson { get; set; }
```

- *Type:* string

A JSON encoded credential for use with IAM authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#service_account_json DatabaseSecretsMount#service_account_json}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.usernameTemplate"></a>

```csharp
public string UsernameTemplate { get; set; }
```

- *Type:* string

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#username_template DatabaseSecretsMount#username_template}

---

##### `VerifyConnection`<sup>Optional</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresql.property.verifyConnection"></a>

```csharp
public object VerifyConnection { get; set; }
```

- *Type:* object

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountRedis <a name="DatabaseSecretsMountRedis" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountRedis {
    string Host,
    string Name,
    string Password,
    string Username,
    string[] AllowedRoles = null,
    string CaCert = null,
    System.Collections.Generic.IDictionary<string, string> Data = null,
    object InsecureTls = null,
    string PluginName = null,
    double Port = null,
    string[] RootRotationStatements = null,
    object Tls = null,
    object VerifyConnection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.host">Host</a></code> | <code>string</code> | Specifies the host to connect to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.name">Name</a></code> | <code>string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.password">Password</a></code> | <code>string</code> | Specifies the password corresponding to the given username. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.username">Username</a></code> | <code>string</code> | Specifies the username for Vault to use. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.caCert">CaCert</a></code> | <code>string</code> | The contents of a PEM-encoded CA cert file to use to verify the Redis server's identity. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.data">Data</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.insecureTls">InsecureTls</a></code> | <code>object</code> | Specifies whether to skip verification of the server certificate when using TLS. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.pluginName">PluginName</a></code> | <code>string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.port">Port</a></code> | <code>double</code> | The transport port to use to connect to Redis. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.rootRotationStatements">RootRotationStatements</a></code> | <code>string[]</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.tls">Tls</a></code> | <code>object</code> | Specifies whether to use TLS when connecting to Redis. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.verifyConnection">VerifyConnection</a></code> | <code>object</code> | Specifies if the connection is verified during initial configuration. |

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Specifies the host to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#host DatabaseSecretsMount#host}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Specifies the password corresponding to the given username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Specifies the username for Vault to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; set; }
```

- *Type:* string[]

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `CaCert`<sup>Optional</sup> <a name="CaCert" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.caCert"></a>

```csharp
public string CaCert { get; set; }
```

- *Type:* string

The contents of a PEM-encoded CA cert file to use to verify the Redis server's identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#ca_cert DatabaseSecretsMount#ca_cert}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.data"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Data { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `InsecureTls`<sup>Optional</sup> <a name="InsecureTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.insecureTls"></a>

```csharp
public object InsecureTls { get; set; }
```

- *Type:* object

Specifies whether to skip verification of the server certificate when using TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#insecure_tls DatabaseSecretsMount#insecure_tls}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.pluginName"></a>

```csharp
public string PluginName { get; set; }
```

- *Type:* string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The transport port to use to connect to Redis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#port DatabaseSecretsMount#port}

---

##### `RootRotationStatements`<sup>Optional</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.rootRotationStatements"></a>

```csharp
public string[] RootRotationStatements { get; set; }
```

- *Type:* string[]

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `Tls`<sup>Optional</sup> <a name="Tls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.tls"></a>

```csharp
public object Tls { get; set; }
```

- *Type:* object

Specifies whether to use TLS when connecting to Redis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#tls DatabaseSecretsMount#tls}

---

##### `VerifyConnection`<sup>Optional</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedis.property.verifyConnection"></a>

```csharp
public object VerifyConnection { get; set; }
```

- *Type:* object

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountRedisElasticache <a name="DatabaseSecretsMountRedisElasticache" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountRedisElasticache {
    string Name,
    string Url,
    string[] AllowedRoles = null,
    System.Collections.Generic.IDictionary<string, string> Data = null,
    string Password = null,
    string PluginName = null,
    string Region = null,
    string[] RootRotationStatements = null,
    string Username = null,
    object VerifyConnection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.name">Name</a></code> | <code>string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.url">Url</a></code> | <code>string</code> | The configuration endpoint for the ElastiCache cluster to connect to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.data">Data</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.password">Password</a></code> | <code>string</code> | The AWS secret key id to use to talk to ElastiCache. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.pluginName">PluginName</a></code> | <code>string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.region">Region</a></code> | <code>string</code> | The AWS region where the ElastiCache cluster is hosted. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.rootRotationStatements">RootRotationStatements</a></code> | <code>string[]</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.username">Username</a></code> | <code>string</code> | The AWS access key id to use to talk to ElastiCache. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.verifyConnection">VerifyConnection</a></code> | <code>object</code> | Specifies if the connection is verified during initial configuration. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

The configuration endpoint for the ElastiCache cluster to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#url DatabaseSecretsMount#url}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; set; }
```

- *Type:* string[]

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.data"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Data { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The AWS secret key id to use to talk to ElastiCache.

If omitted the credentials chain provider is used instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.pluginName"></a>

```csharp
public string PluginName { get; set; }
```

- *Type:* string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The AWS region where the ElastiCache cluster is hosted.

If omitted the plugin tries to infer the region from the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#region DatabaseSecretsMount#region}

---

##### `RootRotationStatements`<sup>Optional</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.rootRotationStatements"></a>

```csharp
public string[] RootRotationStatements { get; set; }
```

- *Type:* string[]

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The AWS access key id to use to talk to ElastiCache.

If omitted the credentials chain provider is used instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `VerifyConnection`<sup>Optional</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticache.property.verifyConnection"></a>

```csharp
public object VerifyConnection { get; set; }
```

- *Type:* object

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountRedshift <a name="DatabaseSecretsMountRedshift" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountRedshift {
    string Name,
    string[] AllowedRoles = null,
    string ConnectionUrl = null,
    System.Collections.Generic.IDictionary<string, string> Data = null,
    object DisableEscaping = null,
    double MaxConnectionLifetime = null,
    double MaxIdleConnections = null,
    double MaxOpenConnections = null,
    string Password = null,
    string PluginName = null,
    string[] RootRotationStatements = null,
    string Username = null,
    string UsernameTemplate = null,
    object VerifyConnection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.name">Name</a></code> | <code>string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.connectionUrl">ConnectionUrl</a></code> | <code>string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.data">Data</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.disableEscaping">DisableEscaping</a></code> | <code>object</code> | Disable special character escaping in username and password. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>double</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>double</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>double</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.password">Password</a></code> | <code>string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.pluginName">PluginName</a></code> | <code>string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.rootRotationStatements">RootRotationStatements</a></code> | <code>string[]</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.username">Username</a></code> | <code>string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.usernameTemplate">UsernameTemplate</a></code> | <code>string</code> | Username generation template. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.verifyConnection">VerifyConnection</a></code> | <code>object</code> | Specifies if the connection is verified during initial configuration. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; set; }
```

- *Type:* string[]

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `ConnectionUrl`<sup>Optional</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.connectionUrl"></a>

```csharp
public string ConnectionUrl { get; set; }
```

- *Type:* string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.data"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Data { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `DisableEscaping`<sup>Optional</sup> <a name="DisableEscaping" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.disableEscaping"></a>

```csharp
public object DisableEscaping { get; set; }
```

- *Type:* object

Disable special character escaping in username and password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#disable_escaping DatabaseSecretsMount#disable_escaping}

---

##### `MaxConnectionLifetime`<sup>Optional</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.maxConnectionLifetime"></a>

```csharp
public double MaxConnectionLifetime { get; set; }
```

- *Type:* double

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}

---

##### `MaxIdleConnections`<sup>Optional</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.maxIdleConnections"></a>

```csharp
public double MaxIdleConnections { get; set; }
```

- *Type:* double

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}

---

##### `MaxOpenConnections`<sup>Optional</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.maxOpenConnections"></a>

```csharp
public double MaxOpenConnections { get; set; }
```

- *Type:* double

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.pluginName"></a>

```csharp
public string PluginName { get; set; }
```

- *Type:* string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `RootRotationStatements`<sup>Optional</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.rootRotationStatements"></a>

```csharp
public string[] RootRotationStatements { get; set; }
```

- *Type:* string[]

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.usernameTemplate"></a>

```csharp
public string UsernameTemplate { get; set; }
```

- *Type:* string

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#username_template DatabaseSecretsMount#username_template}

---

##### `VerifyConnection`<sup>Optional</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshift.property.verifyConnection"></a>

```csharp
public object VerifyConnection { get; set; }
```

- *Type:* object

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

### DatabaseSecretsMountSnowflake <a name="DatabaseSecretsMountSnowflake" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountSnowflake {
    string Name,
    string[] AllowedRoles = null,
    string ConnectionUrl = null,
    System.Collections.Generic.IDictionary<string, string> Data = null,
    double MaxConnectionLifetime = null,
    double MaxIdleConnections = null,
    double MaxOpenConnections = null,
    string Password = null,
    string PluginName = null,
    string[] RootRotationStatements = null,
    string Username = null,
    string UsernameTemplate = null,
    object VerifyConnection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.name">Name</a></code> | <code>string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.connectionUrl">ConnectionUrl</a></code> | <code>string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.data">Data</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>double</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>double</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>double</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.password">Password</a></code> | <code>string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.pluginName">PluginName</a></code> | <code>string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.rootRotationStatements">RootRotationStatements</a></code> | <code>string[]</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.username">Username</a></code> | <code>string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.usernameTemplate">UsernameTemplate</a></code> | <code>string</code> | Username generation template. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.verifyConnection">VerifyConnection</a></code> | <code>object</code> | Specifies if the connection is verified during initial configuration. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#name DatabaseSecretsMount#name}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; set; }
```

- *Type:* string[]

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}

---

##### `ConnectionUrl`<sup>Optional</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.connectionUrl"></a>

```csharp
public string ConnectionUrl { get; set; }
```

- *Type:* string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.data"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Data { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#data DatabaseSecretsMount#data}

---

##### `MaxConnectionLifetime`<sup>Optional</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.maxConnectionLifetime"></a>

```csharp
public double MaxConnectionLifetime { get; set; }
```

- *Type:* double

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}

---

##### `MaxIdleConnections`<sup>Optional</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.maxIdleConnections"></a>

```csharp
public double MaxIdleConnections { get; set; }
```

- *Type:* double

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}

---

##### `MaxOpenConnections`<sup>Optional</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.maxOpenConnections"></a>

```csharp
public double MaxOpenConnections { get; set; }
```

- *Type:* double

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#password DatabaseSecretsMount#password}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.pluginName"></a>

```csharp
public string PluginName { get; set; }
```

- *Type:* string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}

---

##### `RootRotationStatements`<sup>Optional</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.rootRotationStatements"></a>

```csharp
public string[] RootRotationStatements { get; set; }
```

- *Type:* string[]

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#username DatabaseSecretsMount#username}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.usernameTemplate"></a>

```csharp
public string UsernameTemplate { get; set; }
```

- *Type:* string

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#username_template DatabaseSecretsMount#username_template}

---

##### `VerifyConnection`<sup>Optional</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflake.property.verifyConnection"></a>

```csharp
public object VerifyConnection { get; set; }
```

- *Type:* object

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseSecretsMountCassandraList <a name="DatabaseSecretsMountCassandraList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountCassandraList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.get"></a>

```csharp
private DatabaseSecretsMountCassandraOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseSecretsMountCassandraOutputReference <a name="DatabaseSecretsMountCassandraOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountCassandraOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetConnectTimeout">ResetConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetHosts">ResetHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetInsecureTls">ResetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetPemBundle">ResetPemBundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetPemJson">ResetPemJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetPluginName">ResetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetProtocolVersion">ResetProtocolVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetRootRotationStatements">ResetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetTls">ResetTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetVerifyConnection">ResetVerifyConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetAllowedRoles"></a>

```csharp
private void ResetAllowedRoles()
```

##### `ResetConnectTimeout` <a name="ResetConnectTimeout" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetConnectTimeout"></a>

```csharp
private void ResetConnectTimeout()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetData"></a>

```csharp
private void ResetData()
```

##### `ResetHosts` <a name="ResetHosts" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetHosts"></a>

```csharp
private void ResetHosts()
```

##### `ResetInsecureTls` <a name="ResetInsecureTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetInsecureTls"></a>

```csharp
private void ResetInsecureTls()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPemBundle` <a name="ResetPemBundle" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetPemBundle"></a>

```csharp
private void ResetPemBundle()
```

##### `ResetPemJson` <a name="ResetPemJson" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetPemJson"></a>

```csharp
private void ResetPemJson()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetPluginName"></a>

```csharp
private void ResetPluginName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetProtocolVersion` <a name="ResetProtocolVersion" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetProtocolVersion"></a>

```csharp
private void ResetProtocolVersion()
```

##### `ResetRootRotationStatements` <a name="ResetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetRootRotationStatements"></a>

```csharp
private void ResetRootRotationStatements()
```

##### `ResetTls` <a name="ResetTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetTls"></a>

```csharp
private void ResetTls()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```

##### `ResetVerifyConnection` <a name="ResetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.resetVerifyConnection"></a>

```csharp
private void ResetVerifyConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.connectTimeoutInput">ConnectTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.dataInput">DataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.hostsInput">HostsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.insecureTlsInput">InsecureTlsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.pemBundleInput">PemBundleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.pemJsonInput">PemJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.pluginNameInput">PluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.protocolVersionInput">ProtocolVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.rootRotationStatementsInput">RootRotationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.tlsInput">TlsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.verifyConnectionInput">VerifyConnectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.connectTimeout">ConnectTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.data">Data</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.hosts">Hosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.insecureTls">InsecureTls</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.pemBundle">PemBundle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.pemJson">PemJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.pluginName">PluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.protocolVersion">ProtocolVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.rootRotationStatements">RootRotationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.tls">Tls</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.verifyConnection">VerifyConnection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.allowedRolesInput"></a>

```csharp
public string[] AllowedRolesInput { get; }
```

- *Type:* string[]

---

##### `ConnectTimeoutInput`<sup>Optional</sup> <a name="ConnectTimeoutInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.connectTimeoutInput"></a>

```csharp
public double ConnectTimeoutInput { get; }
```

- *Type:* double

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.dataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HostsInput`<sup>Optional</sup> <a name="HostsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.hostsInput"></a>

```csharp
public string[] HostsInput { get; }
```

- *Type:* string[]

---

##### `InsecureTlsInput`<sup>Optional</sup> <a name="InsecureTlsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.insecureTlsInput"></a>

```csharp
public object InsecureTlsInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PemBundleInput`<sup>Optional</sup> <a name="PemBundleInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.pemBundleInput"></a>

```csharp
public string PemBundleInput { get; }
```

- *Type:* string

---

##### `PemJsonInput`<sup>Optional</sup> <a name="PemJsonInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.pemJsonInput"></a>

```csharp
public string PemJsonInput { get; }
```

- *Type:* string

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.pluginNameInput"></a>

```csharp
public string PluginNameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ProtocolVersionInput`<sup>Optional</sup> <a name="ProtocolVersionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.protocolVersionInput"></a>

```csharp
public double ProtocolVersionInput { get; }
```

- *Type:* double

---

##### `RootRotationStatementsInput`<sup>Optional</sup> <a name="RootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.rootRotationStatementsInput"></a>

```csharp
public string[] RootRotationStatementsInput { get; }
```

- *Type:* string[]

---

##### `TlsInput`<sup>Optional</sup> <a name="TlsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.tlsInput"></a>

```csharp
public object TlsInput { get; }
```

- *Type:* object

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `VerifyConnectionInput`<sup>Optional</sup> <a name="VerifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.verifyConnectionInput"></a>

```csharp
public object VerifyConnectionInput { get; }
```

- *Type:* object

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; }
```

- *Type:* string[]

---

##### `ConnectTimeout`<sup>Required</sup> <a name="ConnectTimeout" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.connectTimeout"></a>

```csharp
public double ConnectTimeout { get; }
```

- *Type:* double

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.data"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Data { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.hosts"></a>

```csharp
public string[] Hosts { get; }
```

- *Type:* string[]

---

##### `InsecureTls`<sup>Required</sup> <a name="InsecureTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.insecureTls"></a>

```csharp
public object InsecureTls { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PemBundle`<sup>Required</sup> <a name="PemBundle" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.pemBundle"></a>

```csharp
public string PemBundle { get; }
```

- *Type:* string

---

##### `PemJson`<sup>Required</sup> <a name="PemJson" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.pemJson"></a>

```csharp
public string PemJson { get; }
```

- *Type:* string

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.pluginName"></a>

```csharp
public string PluginName { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `ProtocolVersion`<sup>Required</sup> <a name="ProtocolVersion" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.protocolVersion"></a>

```csharp
public double ProtocolVersion { get; }
```

- *Type:* double

---

##### `RootRotationStatements`<sup>Required</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.rootRotationStatements"></a>

```csharp
public string[] RootRotationStatements { get; }
```

- *Type:* string[]

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.tls"></a>

```csharp
public object Tls { get; }
```

- *Type:* object

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `VerifyConnection`<sup>Required</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.verifyConnection"></a>

```csharp
public object VerifyConnection { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCassandraOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseSecretsMountCouchbaseList <a name="DatabaseSecretsMountCouchbaseList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountCouchbaseList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.get"></a>

```csharp
private DatabaseSecretsMountCouchbaseOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseSecretsMountCouchbaseOutputReference <a name="DatabaseSecretsMountCouchbaseOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountCouchbaseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetBase64Pem">ResetBase64Pem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetInsecureTls">ResetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetPluginName">ResetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetRootRotationStatements">ResetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetTls">ResetTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetVerifyConnection">ResetVerifyConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetAllowedRoles"></a>

```csharp
private void ResetAllowedRoles()
```

##### `ResetBase64Pem` <a name="ResetBase64Pem" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetBase64Pem"></a>

```csharp
private void ResetBase64Pem()
```

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetBucketName"></a>

```csharp
private void ResetBucketName()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetData"></a>

```csharp
private void ResetData()
```

##### `ResetInsecureTls` <a name="ResetInsecureTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetInsecureTls"></a>

```csharp
private void ResetInsecureTls()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetPluginName"></a>

```csharp
private void ResetPluginName()
```

##### `ResetRootRotationStatements` <a name="ResetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetRootRotationStatements"></a>

```csharp
private void ResetRootRotationStatements()
```

##### `ResetTls` <a name="ResetTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetTls"></a>

```csharp
private void ResetTls()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetUsernameTemplate"></a>

```csharp
private void ResetUsernameTemplate()
```

##### `ResetVerifyConnection` <a name="ResetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.resetVerifyConnection"></a>

```csharp
private void ResetVerifyConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.base64PemInput">Base64PemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.dataInput">DataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.hostsInput">HostsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.insecureTlsInput">InsecureTlsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.pluginNameInput">PluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.rootRotationStatementsInput">RootRotationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.tlsInput">TlsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.verifyConnectionInput">VerifyConnectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.base64Pem">Base64Pem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.data">Data</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.hosts">Hosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.insecureTls">InsecureTls</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.pluginName">PluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.rootRotationStatements">RootRotationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.tls">Tls</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.usernameTemplate">UsernameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.verifyConnection">VerifyConnection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.allowedRolesInput"></a>

```csharp
public string[] AllowedRolesInput { get; }
```

- *Type:* string[]

---

##### `Base64PemInput`<sup>Optional</sup> <a name="Base64PemInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.base64PemInput"></a>

```csharp
public string Base64PemInput { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.dataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HostsInput`<sup>Optional</sup> <a name="HostsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.hostsInput"></a>

```csharp
public string[] HostsInput { get; }
```

- *Type:* string[]

---

##### `InsecureTlsInput`<sup>Optional</sup> <a name="InsecureTlsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.insecureTlsInput"></a>

```csharp
public object InsecureTlsInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.pluginNameInput"></a>

```csharp
public string PluginNameInput { get; }
```

- *Type:* string

---

##### `RootRotationStatementsInput`<sup>Optional</sup> <a name="RootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.rootRotationStatementsInput"></a>

```csharp
public string[] RootRotationStatementsInput { get; }
```

- *Type:* string[]

---

##### `TlsInput`<sup>Optional</sup> <a name="TlsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.tlsInput"></a>

```csharp
public object TlsInput { get; }
```

- *Type:* object

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.usernameTemplateInput"></a>

```csharp
public string UsernameTemplateInput { get; }
```

- *Type:* string

---

##### `VerifyConnectionInput`<sup>Optional</sup> <a name="VerifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.verifyConnectionInput"></a>

```csharp
public object VerifyConnectionInput { get; }
```

- *Type:* object

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; }
```

- *Type:* string[]

---

##### `Base64Pem`<sup>Required</sup> <a name="Base64Pem" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.base64Pem"></a>

```csharp
public string Base64Pem { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.data"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Data { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.hosts"></a>

```csharp
public string[] Hosts { get; }
```

- *Type:* string[]

---

##### `InsecureTls`<sup>Required</sup> <a name="InsecureTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.insecureTls"></a>

```csharp
public object InsecureTls { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.pluginName"></a>

```csharp
public string PluginName { get; }
```

- *Type:* string

---

##### `RootRotationStatements`<sup>Required</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.rootRotationStatements"></a>

```csharp
public string[] RootRotationStatements { get; }
```

- *Type:* string[]

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.tls"></a>

```csharp
public object Tls { get; }
```

- *Type:* object

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.usernameTemplate"></a>

```csharp
public string UsernameTemplate { get; }
```

- *Type:* string

---

##### `VerifyConnection`<sup>Required</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.verifyConnection"></a>

```csharp
public object VerifyConnection { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountCouchbaseOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseSecretsMountElasticsearchList <a name="DatabaseSecretsMountElasticsearchList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountElasticsearchList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.get"></a>

```csharp
private DatabaseSecretsMountElasticsearchOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseSecretsMountElasticsearchOutputReference <a name="DatabaseSecretsMountElasticsearchOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountElasticsearchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetCaCert">ResetCaCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetCaPath">ResetCaPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetClientCert">ResetClientCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetClientKey">ResetClientKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetInsecure">ResetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetPluginName">ResetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetRootRotationStatements">ResetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetTlsServerName">ResetTlsServerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetVerifyConnection">ResetVerifyConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetAllowedRoles"></a>

```csharp
private void ResetAllowedRoles()
```

##### `ResetCaCert` <a name="ResetCaCert" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetCaCert"></a>

```csharp
private void ResetCaCert()
```

##### `ResetCaPath` <a name="ResetCaPath" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetCaPath"></a>

```csharp
private void ResetCaPath()
```

##### `ResetClientCert` <a name="ResetClientCert" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetClientCert"></a>

```csharp
private void ResetClientCert()
```

##### `ResetClientKey` <a name="ResetClientKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetClientKey"></a>

```csharp
private void ResetClientKey()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetData"></a>

```csharp
private void ResetData()
```

##### `ResetInsecure` <a name="ResetInsecure" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetInsecure"></a>

```csharp
private void ResetInsecure()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetPluginName"></a>

```csharp
private void ResetPluginName()
```

##### `ResetRootRotationStatements` <a name="ResetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetRootRotationStatements"></a>

```csharp
private void ResetRootRotationStatements()
```

##### `ResetTlsServerName` <a name="ResetTlsServerName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetTlsServerName"></a>

```csharp
private void ResetTlsServerName()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetUsernameTemplate"></a>

```csharp
private void ResetUsernameTemplate()
```

##### `ResetVerifyConnection` <a name="ResetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.resetVerifyConnection"></a>

```csharp
private void ResetVerifyConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.caCertInput">CaCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.caPathInput">CaPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.clientCertInput">ClientCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.clientKeyInput">ClientKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.dataInput">DataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.insecureInput">InsecureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.pluginNameInput">PluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.rootRotationStatementsInput">RootRotationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.tlsServerNameInput">TlsServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.verifyConnectionInput">VerifyConnectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.caCert">CaCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.caPath">CaPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.clientCert">ClientCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.clientKey">ClientKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.data">Data</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.insecure">Insecure</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.pluginName">PluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.rootRotationStatements">RootRotationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.tlsServerName">TlsServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.usernameTemplate">UsernameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.verifyConnection">VerifyConnection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.allowedRolesInput"></a>

```csharp
public string[] AllowedRolesInput { get; }
```

- *Type:* string[]

---

##### `CaCertInput`<sup>Optional</sup> <a name="CaCertInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.caCertInput"></a>

```csharp
public string CaCertInput { get; }
```

- *Type:* string

---

##### `CaPathInput`<sup>Optional</sup> <a name="CaPathInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.caPathInput"></a>

```csharp
public string CaPathInput { get; }
```

- *Type:* string

---

##### `ClientCertInput`<sup>Optional</sup> <a name="ClientCertInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.clientCertInput"></a>

```csharp
public string ClientCertInput { get; }
```

- *Type:* string

---

##### `ClientKeyInput`<sup>Optional</sup> <a name="ClientKeyInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.clientKeyInput"></a>

```csharp
public string ClientKeyInput { get; }
```

- *Type:* string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.dataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InsecureInput`<sup>Optional</sup> <a name="InsecureInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.insecureInput"></a>

```csharp
public object InsecureInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.pluginNameInput"></a>

```csharp
public string PluginNameInput { get; }
```

- *Type:* string

---

##### `RootRotationStatementsInput`<sup>Optional</sup> <a name="RootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.rootRotationStatementsInput"></a>

```csharp
public string[] RootRotationStatementsInput { get; }
```

- *Type:* string[]

---

##### `TlsServerNameInput`<sup>Optional</sup> <a name="TlsServerNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.tlsServerNameInput"></a>

```csharp
public string TlsServerNameInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.usernameTemplateInput"></a>

```csharp
public string UsernameTemplateInput { get; }
```

- *Type:* string

---

##### `VerifyConnectionInput`<sup>Optional</sup> <a name="VerifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.verifyConnectionInput"></a>

```csharp
public object VerifyConnectionInput { get; }
```

- *Type:* object

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; }
```

- *Type:* string[]

---

##### `CaCert`<sup>Required</sup> <a name="CaCert" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.caCert"></a>

```csharp
public string CaCert { get; }
```

- *Type:* string

---

##### `CaPath`<sup>Required</sup> <a name="CaPath" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.caPath"></a>

```csharp
public string CaPath { get; }
```

- *Type:* string

---

##### `ClientCert`<sup>Required</sup> <a name="ClientCert" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.clientCert"></a>

```csharp
public string ClientCert { get; }
```

- *Type:* string

---

##### `ClientKey`<sup>Required</sup> <a name="ClientKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.clientKey"></a>

```csharp
public string ClientKey { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.data"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Data { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Insecure`<sup>Required</sup> <a name="Insecure" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.insecure"></a>

```csharp
public object Insecure { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.pluginName"></a>

```csharp
public string PluginName { get; }
```

- *Type:* string

---

##### `RootRotationStatements`<sup>Required</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.rootRotationStatements"></a>

```csharp
public string[] RootRotationStatements { get; }
```

- *Type:* string[]

---

##### `TlsServerName`<sup>Required</sup> <a name="TlsServerName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.tlsServerName"></a>

```csharp
public string TlsServerName { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.usernameTemplate"></a>

```csharp
public string UsernameTemplate { get; }
```

- *Type:* string

---

##### `VerifyConnection`<sup>Required</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.verifyConnection"></a>

```csharp
public object VerifyConnection { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountElasticsearchOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseSecretsMountHanaList <a name="DatabaseSecretsMountHanaList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountHanaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.get"></a>

```csharp
private DatabaseSecretsMountHanaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseSecretsMountHanaOutputReference <a name="DatabaseSecretsMountHanaOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountHanaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetConnectionUrl">ResetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetDisableEscaping">ResetDisableEscaping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetMaxConnectionLifetime">ResetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetMaxIdleConnections">ResetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetMaxOpenConnections">ResetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetPluginName">ResetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetRootRotationStatements">ResetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetVerifyConnection">ResetVerifyConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetAllowedRoles"></a>

```csharp
private void ResetAllowedRoles()
```

##### `ResetConnectionUrl` <a name="ResetConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetConnectionUrl"></a>

```csharp
private void ResetConnectionUrl()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetData"></a>

```csharp
private void ResetData()
```

##### `ResetDisableEscaping` <a name="ResetDisableEscaping" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetDisableEscaping"></a>

```csharp
private void ResetDisableEscaping()
```

##### `ResetMaxConnectionLifetime` <a name="ResetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetMaxConnectionLifetime"></a>

```csharp
private void ResetMaxConnectionLifetime()
```

##### `ResetMaxIdleConnections` <a name="ResetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetMaxIdleConnections"></a>

```csharp
private void ResetMaxIdleConnections()
```

##### `ResetMaxOpenConnections` <a name="ResetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetMaxOpenConnections"></a>

```csharp
private void ResetMaxOpenConnections()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetPluginName"></a>

```csharp
private void ResetPluginName()
```

##### `ResetRootRotationStatements` <a name="ResetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetRootRotationStatements"></a>

```csharp
private void ResetRootRotationStatements()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```

##### `ResetVerifyConnection` <a name="ResetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.resetVerifyConnection"></a>

```csharp
private void ResetVerifyConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.connectionUrlInput">ConnectionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.dataInput">DataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.disableEscapingInput">DisableEscapingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.maxConnectionLifetimeInput">MaxConnectionLifetimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.maxIdleConnectionsInput">MaxIdleConnectionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.maxOpenConnectionsInput">MaxOpenConnectionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.pluginNameInput">PluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.rootRotationStatementsInput">RootRotationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.verifyConnectionInput">VerifyConnectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.connectionUrl">ConnectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.data">Data</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.disableEscaping">DisableEscaping</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.pluginName">PluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.rootRotationStatements">RootRotationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.verifyConnection">VerifyConnection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.allowedRolesInput"></a>

```csharp
public string[] AllowedRolesInput { get; }
```

- *Type:* string[]

---

##### `ConnectionUrlInput`<sup>Optional</sup> <a name="ConnectionUrlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.connectionUrlInput"></a>

```csharp
public string ConnectionUrlInput { get; }
```

- *Type:* string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.dataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisableEscapingInput`<sup>Optional</sup> <a name="DisableEscapingInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.disableEscapingInput"></a>

```csharp
public object DisableEscapingInput { get; }
```

- *Type:* object

---

##### `MaxConnectionLifetimeInput`<sup>Optional</sup> <a name="MaxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.maxConnectionLifetimeInput"></a>

```csharp
public double MaxConnectionLifetimeInput { get; }
```

- *Type:* double

---

##### `MaxIdleConnectionsInput`<sup>Optional</sup> <a name="MaxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.maxIdleConnectionsInput"></a>

```csharp
public double MaxIdleConnectionsInput { get; }
```

- *Type:* double

---

##### `MaxOpenConnectionsInput`<sup>Optional</sup> <a name="MaxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.maxOpenConnectionsInput"></a>

```csharp
public double MaxOpenConnectionsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.pluginNameInput"></a>

```csharp
public string PluginNameInput { get; }
```

- *Type:* string

---

##### `RootRotationStatementsInput`<sup>Optional</sup> <a name="RootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.rootRotationStatementsInput"></a>

```csharp
public string[] RootRotationStatementsInput { get; }
```

- *Type:* string[]

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `VerifyConnectionInput`<sup>Optional</sup> <a name="VerifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.verifyConnectionInput"></a>

```csharp
public object VerifyConnectionInput { get; }
```

- *Type:* object

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; }
```

- *Type:* string[]

---

##### `ConnectionUrl`<sup>Required</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.connectionUrl"></a>

```csharp
public string ConnectionUrl { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.data"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Data { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisableEscaping`<sup>Required</sup> <a name="DisableEscaping" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.disableEscaping"></a>

```csharp
public object DisableEscaping { get; }
```

- *Type:* object

---

##### `MaxConnectionLifetime`<sup>Required</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.maxConnectionLifetime"></a>

```csharp
public double MaxConnectionLifetime { get; }
```

- *Type:* double

---

##### `MaxIdleConnections`<sup>Required</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.maxIdleConnections"></a>

```csharp
public double MaxIdleConnections { get; }
```

- *Type:* double

---

##### `MaxOpenConnections`<sup>Required</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.maxOpenConnections"></a>

```csharp
public double MaxOpenConnections { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.pluginName"></a>

```csharp
public string PluginName { get; }
```

- *Type:* string

---

##### `RootRotationStatements`<sup>Required</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.rootRotationStatements"></a>

```csharp
public string[] RootRotationStatements { get; }
```

- *Type:* string[]

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `VerifyConnection`<sup>Required</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.verifyConnection"></a>

```csharp
public object VerifyConnection { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountHanaOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseSecretsMountInfluxdbList <a name="DatabaseSecretsMountInfluxdbList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountInfluxdbList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.get"></a>

```csharp
private DatabaseSecretsMountInfluxdbOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseSecretsMountInfluxdbOutputReference <a name="DatabaseSecretsMountInfluxdbOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountInfluxdbOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetConnectTimeout">ResetConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetInsecureTls">ResetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetPemBundle">ResetPemBundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetPemJson">ResetPemJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetPluginName">ResetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetRootRotationStatements">ResetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetTls">ResetTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetVerifyConnection">ResetVerifyConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetAllowedRoles"></a>

```csharp
private void ResetAllowedRoles()
```

##### `ResetConnectTimeout` <a name="ResetConnectTimeout" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetConnectTimeout"></a>

```csharp
private void ResetConnectTimeout()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetData"></a>

```csharp
private void ResetData()
```

##### `ResetInsecureTls` <a name="ResetInsecureTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetInsecureTls"></a>

```csharp
private void ResetInsecureTls()
```

##### `ResetPemBundle` <a name="ResetPemBundle" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetPemBundle"></a>

```csharp
private void ResetPemBundle()
```

##### `ResetPemJson` <a name="ResetPemJson" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetPemJson"></a>

```csharp
private void ResetPemJson()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetPluginName"></a>

```csharp
private void ResetPluginName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetRootRotationStatements` <a name="ResetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetRootRotationStatements"></a>

```csharp
private void ResetRootRotationStatements()
```

##### `ResetTls` <a name="ResetTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetTls"></a>

```csharp
private void ResetTls()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetUsernameTemplate"></a>

```csharp
private void ResetUsernameTemplate()
```

##### `ResetVerifyConnection` <a name="ResetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.resetVerifyConnection"></a>

```csharp
private void ResetVerifyConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.connectTimeoutInput">ConnectTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.dataInput">DataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.insecureTlsInput">InsecureTlsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.pemBundleInput">PemBundleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.pemJsonInput">PemJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.pluginNameInput">PluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.rootRotationStatementsInput">RootRotationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.tlsInput">TlsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.verifyConnectionInput">VerifyConnectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.connectTimeout">ConnectTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.data">Data</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.insecureTls">InsecureTls</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.pemBundle">PemBundle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.pemJson">PemJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.pluginName">PluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.rootRotationStatements">RootRotationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.tls">Tls</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.usernameTemplate">UsernameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.verifyConnection">VerifyConnection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.allowedRolesInput"></a>

```csharp
public string[] AllowedRolesInput { get; }
```

- *Type:* string[]

---

##### `ConnectTimeoutInput`<sup>Optional</sup> <a name="ConnectTimeoutInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.connectTimeoutInput"></a>

```csharp
public double ConnectTimeoutInput { get; }
```

- *Type:* double

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.dataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `InsecureTlsInput`<sup>Optional</sup> <a name="InsecureTlsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.insecureTlsInput"></a>

```csharp
public object InsecureTlsInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PemBundleInput`<sup>Optional</sup> <a name="PemBundleInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.pemBundleInput"></a>

```csharp
public string PemBundleInput { get; }
```

- *Type:* string

---

##### `PemJsonInput`<sup>Optional</sup> <a name="PemJsonInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.pemJsonInput"></a>

```csharp
public string PemJsonInput { get; }
```

- *Type:* string

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.pluginNameInput"></a>

```csharp
public string PluginNameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `RootRotationStatementsInput`<sup>Optional</sup> <a name="RootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.rootRotationStatementsInput"></a>

```csharp
public string[] RootRotationStatementsInput { get; }
```

- *Type:* string[]

---

##### `TlsInput`<sup>Optional</sup> <a name="TlsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.tlsInput"></a>

```csharp
public object TlsInput { get; }
```

- *Type:* object

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.usernameTemplateInput"></a>

```csharp
public string UsernameTemplateInput { get; }
```

- *Type:* string

---

##### `VerifyConnectionInput`<sup>Optional</sup> <a name="VerifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.verifyConnectionInput"></a>

```csharp
public object VerifyConnectionInput { get; }
```

- *Type:* object

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; }
```

- *Type:* string[]

---

##### `ConnectTimeout`<sup>Required</sup> <a name="ConnectTimeout" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.connectTimeout"></a>

```csharp
public double ConnectTimeout { get; }
```

- *Type:* double

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.data"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Data { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `InsecureTls`<sup>Required</sup> <a name="InsecureTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.insecureTls"></a>

```csharp
public object InsecureTls { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PemBundle`<sup>Required</sup> <a name="PemBundle" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.pemBundle"></a>

```csharp
public string PemBundle { get; }
```

- *Type:* string

---

##### `PemJson`<sup>Required</sup> <a name="PemJson" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.pemJson"></a>

```csharp
public string PemJson { get; }
```

- *Type:* string

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.pluginName"></a>

```csharp
public string PluginName { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `RootRotationStatements`<sup>Required</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.rootRotationStatements"></a>

```csharp
public string[] RootRotationStatements { get; }
```

- *Type:* string[]

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.tls"></a>

```csharp
public object Tls { get; }
```

- *Type:* object

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.usernameTemplate"></a>

```csharp
public string UsernameTemplate { get; }
```

- *Type:* string

---

##### `VerifyConnection`<sup>Required</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.verifyConnection"></a>

```csharp
public object VerifyConnection { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountInfluxdbOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseSecretsMountMongodbatlasList <a name="DatabaseSecretsMountMongodbatlasList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountMongodbatlasList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.get"></a>

```csharp
private DatabaseSecretsMountMongodbatlasOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseSecretsMountMongodbatlasOutputReference <a name="DatabaseSecretsMountMongodbatlasOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountMongodbatlasOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.resetPluginName">ResetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.resetRootRotationStatements">ResetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.resetVerifyConnection">ResetVerifyConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.resetAllowedRoles"></a>

```csharp
private void ResetAllowedRoles()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.resetData"></a>

```csharp
private void ResetData()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.resetPluginName"></a>

```csharp
private void ResetPluginName()
```

##### `ResetRootRotationStatements` <a name="ResetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.resetRootRotationStatements"></a>

```csharp
private void ResetRootRotationStatements()
```

##### `ResetVerifyConnection` <a name="ResetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.resetVerifyConnection"></a>

```csharp
private void ResetVerifyConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.dataInput">DataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.pluginNameInput">PluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.privateKeyInput">PrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.publicKeyInput">PublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.rootRotationStatementsInput">RootRotationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.verifyConnectionInput">VerifyConnectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.data">Data</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.pluginName">PluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.privateKey">PrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.publicKey">PublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.rootRotationStatements">RootRotationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.verifyConnection">VerifyConnection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.allowedRolesInput"></a>

```csharp
public string[] AllowedRolesInput { get; }
```

- *Type:* string[]

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.dataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.pluginNameInput"></a>

```csharp
public string PluginNameInput { get; }
```

- *Type:* string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.privateKeyInput"></a>

```csharp
public string PrivateKeyInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.publicKeyInput"></a>

```csharp
public string PublicKeyInput { get; }
```

- *Type:* string

---

##### `RootRotationStatementsInput`<sup>Optional</sup> <a name="RootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.rootRotationStatementsInput"></a>

```csharp
public string[] RootRotationStatementsInput { get; }
```

- *Type:* string[]

---

##### `VerifyConnectionInput`<sup>Optional</sup> <a name="VerifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.verifyConnectionInput"></a>

```csharp
public object VerifyConnectionInput { get; }
```

- *Type:* object

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; }
```

- *Type:* string[]

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.data"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Data { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.pluginName"></a>

```csharp
public string PluginName { get; }
```

- *Type:* string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.privateKey"></a>

```csharp
public string PrivateKey { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.publicKey"></a>

```csharp
public string PublicKey { get; }
```

- *Type:* string

---

##### `RootRotationStatements`<sup>Required</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.rootRotationStatements"></a>

```csharp
public string[] RootRotationStatements { get; }
```

- *Type:* string[]

---

##### `VerifyConnection`<sup>Required</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.verifyConnection"></a>

```csharp
public object VerifyConnection { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbatlasOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseSecretsMountMongodbList <a name="DatabaseSecretsMountMongodbList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountMongodbList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.get"></a>

```csharp
private DatabaseSecretsMountMongodbOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseSecretsMountMongodbOutputReference <a name="DatabaseSecretsMountMongodbOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountMongodbOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetConnectionUrl">ResetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetMaxConnectionLifetime">ResetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetMaxIdleConnections">ResetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetMaxOpenConnections">ResetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetPluginName">ResetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetRootRotationStatements">ResetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetVerifyConnection">ResetVerifyConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetAllowedRoles"></a>

```csharp
private void ResetAllowedRoles()
```

##### `ResetConnectionUrl` <a name="ResetConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetConnectionUrl"></a>

```csharp
private void ResetConnectionUrl()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetData"></a>

```csharp
private void ResetData()
```

##### `ResetMaxConnectionLifetime` <a name="ResetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetMaxConnectionLifetime"></a>

```csharp
private void ResetMaxConnectionLifetime()
```

##### `ResetMaxIdleConnections` <a name="ResetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetMaxIdleConnections"></a>

```csharp
private void ResetMaxIdleConnections()
```

##### `ResetMaxOpenConnections` <a name="ResetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetMaxOpenConnections"></a>

```csharp
private void ResetMaxOpenConnections()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetPluginName"></a>

```csharp
private void ResetPluginName()
```

##### `ResetRootRotationStatements` <a name="ResetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetRootRotationStatements"></a>

```csharp
private void ResetRootRotationStatements()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetUsernameTemplate"></a>

```csharp
private void ResetUsernameTemplate()
```

##### `ResetVerifyConnection` <a name="ResetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.resetVerifyConnection"></a>

```csharp
private void ResetVerifyConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.connectionUrlInput">ConnectionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.dataInput">DataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.maxConnectionLifetimeInput">MaxConnectionLifetimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.maxIdleConnectionsInput">MaxIdleConnectionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.maxOpenConnectionsInput">MaxOpenConnectionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.pluginNameInput">PluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.rootRotationStatementsInput">RootRotationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.verifyConnectionInput">VerifyConnectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.connectionUrl">ConnectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.data">Data</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.pluginName">PluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.rootRotationStatements">RootRotationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.usernameTemplate">UsernameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.verifyConnection">VerifyConnection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.allowedRolesInput"></a>

```csharp
public string[] AllowedRolesInput { get; }
```

- *Type:* string[]

---

##### `ConnectionUrlInput`<sup>Optional</sup> <a name="ConnectionUrlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.connectionUrlInput"></a>

```csharp
public string ConnectionUrlInput { get; }
```

- *Type:* string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.dataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaxConnectionLifetimeInput`<sup>Optional</sup> <a name="MaxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.maxConnectionLifetimeInput"></a>

```csharp
public double MaxConnectionLifetimeInput { get; }
```

- *Type:* double

---

##### `MaxIdleConnectionsInput`<sup>Optional</sup> <a name="MaxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.maxIdleConnectionsInput"></a>

```csharp
public double MaxIdleConnectionsInput { get; }
```

- *Type:* double

---

##### `MaxOpenConnectionsInput`<sup>Optional</sup> <a name="MaxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.maxOpenConnectionsInput"></a>

```csharp
public double MaxOpenConnectionsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.pluginNameInput"></a>

```csharp
public string PluginNameInput { get; }
```

- *Type:* string

---

##### `RootRotationStatementsInput`<sup>Optional</sup> <a name="RootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.rootRotationStatementsInput"></a>

```csharp
public string[] RootRotationStatementsInput { get; }
```

- *Type:* string[]

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.usernameTemplateInput"></a>

```csharp
public string UsernameTemplateInput { get; }
```

- *Type:* string

---

##### `VerifyConnectionInput`<sup>Optional</sup> <a name="VerifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.verifyConnectionInput"></a>

```csharp
public object VerifyConnectionInput { get; }
```

- *Type:* object

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; }
```

- *Type:* string[]

---

##### `ConnectionUrl`<sup>Required</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.connectionUrl"></a>

```csharp
public string ConnectionUrl { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.data"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Data { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaxConnectionLifetime`<sup>Required</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.maxConnectionLifetime"></a>

```csharp
public double MaxConnectionLifetime { get; }
```

- *Type:* double

---

##### `MaxIdleConnections`<sup>Required</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.maxIdleConnections"></a>

```csharp
public double MaxIdleConnections { get; }
```

- *Type:* double

---

##### `MaxOpenConnections`<sup>Required</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.maxOpenConnections"></a>

```csharp
public double MaxOpenConnections { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.pluginName"></a>

```csharp
public string PluginName { get; }
```

- *Type:* string

---

##### `RootRotationStatements`<sup>Required</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.rootRotationStatements"></a>

```csharp
public string[] RootRotationStatements { get; }
```

- *Type:* string[]

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.usernameTemplate"></a>

```csharp
public string UsernameTemplate { get; }
```

- *Type:* string

---

##### `VerifyConnection`<sup>Required</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.verifyConnection"></a>

```csharp
public object VerifyConnection { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMongodbOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseSecretsMountMssqlList <a name="DatabaseSecretsMountMssqlList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountMssqlList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.get"></a>

```csharp
private DatabaseSecretsMountMssqlOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseSecretsMountMssqlOutputReference <a name="DatabaseSecretsMountMssqlOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountMssqlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetConnectionUrl">ResetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetContainedDb">ResetContainedDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetDisableEscaping">ResetDisableEscaping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetMaxConnectionLifetime">ResetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetMaxIdleConnections">ResetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetMaxOpenConnections">ResetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetPluginName">ResetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetRootRotationStatements">ResetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetVerifyConnection">ResetVerifyConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetAllowedRoles"></a>

```csharp
private void ResetAllowedRoles()
```

##### `ResetConnectionUrl` <a name="ResetConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetConnectionUrl"></a>

```csharp
private void ResetConnectionUrl()
```

##### `ResetContainedDb` <a name="ResetContainedDb" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetContainedDb"></a>

```csharp
private void ResetContainedDb()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetData"></a>

```csharp
private void ResetData()
```

##### `ResetDisableEscaping` <a name="ResetDisableEscaping" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetDisableEscaping"></a>

```csharp
private void ResetDisableEscaping()
```

##### `ResetMaxConnectionLifetime` <a name="ResetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetMaxConnectionLifetime"></a>

```csharp
private void ResetMaxConnectionLifetime()
```

##### `ResetMaxIdleConnections` <a name="ResetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetMaxIdleConnections"></a>

```csharp
private void ResetMaxIdleConnections()
```

##### `ResetMaxOpenConnections` <a name="ResetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetMaxOpenConnections"></a>

```csharp
private void ResetMaxOpenConnections()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetPluginName"></a>

```csharp
private void ResetPluginName()
```

##### `ResetRootRotationStatements` <a name="ResetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetRootRotationStatements"></a>

```csharp
private void ResetRootRotationStatements()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetUsernameTemplate"></a>

```csharp
private void ResetUsernameTemplate()
```

##### `ResetVerifyConnection` <a name="ResetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.resetVerifyConnection"></a>

```csharp
private void ResetVerifyConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.connectionUrlInput">ConnectionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.containedDbInput">ContainedDbInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.dataInput">DataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.disableEscapingInput">DisableEscapingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.maxConnectionLifetimeInput">MaxConnectionLifetimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.maxIdleConnectionsInput">MaxIdleConnectionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.maxOpenConnectionsInput">MaxOpenConnectionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.pluginNameInput">PluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.rootRotationStatementsInput">RootRotationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.verifyConnectionInput">VerifyConnectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.connectionUrl">ConnectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.containedDb">ContainedDb</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.data">Data</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.disableEscaping">DisableEscaping</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.pluginName">PluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.rootRotationStatements">RootRotationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.usernameTemplate">UsernameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.verifyConnection">VerifyConnection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.allowedRolesInput"></a>

```csharp
public string[] AllowedRolesInput { get; }
```

- *Type:* string[]

---

##### `ConnectionUrlInput`<sup>Optional</sup> <a name="ConnectionUrlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.connectionUrlInput"></a>

```csharp
public string ConnectionUrlInput { get; }
```

- *Type:* string

---

##### `ContainedDbInput`<sup>Optional</sup> <a name="ContainedDbInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.containedDbInput"></a>

```csharp
public object ContainedDbInput { get; }
```

- *Type:* object

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.dataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisableEscapingInput`<sup>Optional</sup> <a name="DisableEscapingInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.disableEscapingInput"></a>

```csharp
public object DisableEscapingInput { get; }
```

- *Type:* object

---

##### `MaxConnectionLifetimeInput`<sup>Optional</sup> <a name="MaxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.maxConnectionLifetimeInput"></a>

```csharp
public double MaxConnectionLifetimeInput { get; }
```

- *Type:* double

---

##### `MaxIdleConnectionsInput`<sup>Optional</sup> <a name="MaxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.maxIdleConnectionsInput"></a>

```csharp
public double MaxIdleConnectionsInput { get; }
```

- *Type:* double

---

##### `MaxOpenConnectionsInput`<sup>Optional</sup> <a name="MaxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.maxOpenConnectionsInput"></a>

```csharp
public double MaxOpenConnectionsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.pluginNameInput"></a>

```csharp
public string PluginNameInput { get; }
```

- *Type:* string

---

##### `RootRotationStatementsInput`<sup>Optional</sup> <a name="RootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.rootRotationStatementsInput"></a>

```csharp
public string[] RootRotationStatementsInput { get; }
```

- *Type:* string[]

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.usernameTemplateInput"></a>

```csharp
public string UsernameTemplateInput { get; }
```

- *Type:* string

---

##### `VerifyConnectionInput`<sup>Optional</sup> <a name="VerifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.verifyConnectionInput"></a>

```csharp
public object VerifyConnectionInput { get; }
```

- *Type:* object

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; }
```

- *Type:* string[]

---

##### `ConnectionUrl`<sup>Required</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.connectionUrl"></a>

```csharp
public string ConnectionUrl { get; }
```

- *Type:* string

---

##### `ContainedDb`<sup>Required</sup> <a name="ContainedDb" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.containedDb"></a>

```csharp
public object ContainedDb { get; }
```

- *Type:* object

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.data"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Data { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisableEscaping`<sup>Required</sup> <a name="DisableEscaping" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.disableEscaping"></a>

```csharp
public object DisableEscaping { get; }
```

- *Type:* object

---

##### `MaxConnectionLifetime`<sup>Required</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.maxConnectionLifetime"></a>

```csharp
public double MaxConnectionLifetime { get; }
```

- *Type:* double

---

##### `MaxIdleConnections`<sup>Required</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.maxIdleConnections"></a>

```csharp
public double MaxIdleConnections { get; }
```

- *Type:* double

---

##### `MaxOpenConnections`<sup>Required</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.maxOpenConnections"></a>

```csharp
public double MaxOpenConnections { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.pluginName"></a>

```csharp
public string PluginName { get; }
```

- *Type:* string

---

##### `RootRotationStatements`<sup>Required</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.rootRotationStatements"></a>

```csharp
public string[] RootRotationStatements { get; }
```

- *Type:* string[]

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.usernameTemplate"></a>

```csharp
public string UsernameTemplate { get; }
```

- *Type:* string

---

##### `VerifyConnection`<sup>Required</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.verifyConnection"></a>

```csharp
public object VerifyConnection { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMssqlOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseSecretsMountMysqlAuroraList <a name="DatabaseSecretsMountMysqlAuroraList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountMysqlAuroraList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.get"></a>

```csharp
private DatabaseSecretsMountMysqlAuroraOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseSecretsMountMysqlAuroraOutputReference <a name="DatabaseSecretsMountMysqlAuroraOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountMysqlAuroraOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetConnectionUrl">ResetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetMaxConnectionLifetime">ResetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetMaxIdleConnections">ResetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetMaxOpenConnections">ResetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetPluginName">ResetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetRootRotationStatements">ResetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetVerifyConnection">ResetVerifyConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetAllowedRoles"></a>

```csharp
private void ResetAllowedRoles()
```

##### `ResetConnectionUrl` <a name="ResetConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetConnectionUrl"></a>

```csharp
private void ResetConnectionUrl()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetData"></a>

```csharp
private void ResetData()
```

##### `ResetMaxConnectionLifetime` <a name="ResetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetMaxConnectionLifetime"></a>

```csharp
private void ResetMaxConnectionLifetime()
```

##### `ResetMaxIdleConnections` <a name="ResetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetMaxIdleConnections"></a>

```csharp
private void ResetMaxIdleConnections()
```

##### `ResetMaxOpenConnections` <a name="ResetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetMaxOpenConnections"></a>

```csharp
private void ResetMaxOpenConnections()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetPluginName"></a>

```csharp
private void ResetPluginName()
```

##### `ResetRootRotationStatements` <a name="ResetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetRootRotationStatements"></a>

```csharp
private void ResetRootRotationStatements()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetUsernameTemplate"></a>

```csharp
private void ResetUsernameTemplate()
```

##### `ResetVerifyConnection` <a name="ResetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.resetVerifyConnection"></a>

```csharp
private void ResetVerifyConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.connectionUrlInput">ConnectionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.dataInput">DataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.maxConnectionLifetimeInput">MaxConnectionLifetimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.maxIdleConnectionsInput">MaxIdleConnectionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.maxOpenConnectionsInput">MaxOpenConnectionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.pluginNameInput">PluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.rootRotationStatementsInput">RootRotationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.verifyConnectionInput">VerifyConnectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.connectionUrl">ConnectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.data">Data</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.pluginName">PluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.rootRotationStatements">RootRotationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.usernameTemplate">UsernameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.verifyConnection">VerifyConnection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.allowedRolesInput"></a>

```csharp
public string[] AllowedRolesInput { get; }
```

- *Type:* string[]

---

##### `ConnectionUrlInput`<sup>Optional</sup> <a name="ConnectionUrlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.connectionUrlInput"></a>

```csharp
public string ConnectionUrlInput { get; }
```

- *Type:* string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.dataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaxConnectionLifetimeInput`<sup>Optional</sup> <a name="MaxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.maxConnectionLifetimeInput"></a>

```csharp
public double MaxConnectionLifetimeInput { get; }
```

- *Type:* double

---

##### `MaxIdleConnectionsInput`<sup>Optional</sup> <a name="MaxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.maxIdleConnectionsInput"></a>

```csharp
public double MaxIdleConnectionsInput { get; }
```

- *Type:* double

---

##### `MaxOpenConnectionsInput`<sup>Optional</sup> <a name="MaxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.maxOpenConnectionsInput"></a>

```csharp
public double MaxOpenConnectionsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.pluginNameInput"></a>

```csharp
public string PluginNameInput { get; }
```

- *Type:* string

---

##### `RootRotationStatementsInput`<sup>Optional</sup> <a name="RootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.rootRotationStatementsInput"></a>

```csharp
public string[] RootRotationStatementsInput { get; }
```

- *Type:* string[]

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.usernameTemplateInput"></a>

```csharp
public string UsernameTemplateInput { get; }
```

- *Type:* string

---

##### `VerifyConnectionInput`<sup>Optional</sup> <a name="VerifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.verifyConnectionInput"></a>

```csharp
public object VerifyConnectionInput { get; }
```

- *Type:* object

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; }
```

- *Type:* string[]

---

##### `ConnectionUrl`<sup>Required</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.connectionUrl"></a>

```csharp
public string ConnectionUrl { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.data"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Data { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaxConnectionLifetime`<sup>Required</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.maxConnectionLifetime"></a>

```csharp
public double MaxConnectionLifetime { get; }
```

- *Type:* double

---

##### `MaxIdleConnections`<sup>Required</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.maxIdleConnections"></a>

```csharp
public double MaxIdleConnections { get; }
```

- *Type:* double

---

##### `MaxOpenConnections`<sup>Required</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.maxOpenConnections"></a>

```csharp
public double MaxOpenConnections { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.pluginName"></a>

```csharp
public string PluginName { get; }
```

- *Type:* string

---

##### `RootRotationStatements`<sup>Required</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.rootRotationStatements"></a>

```csharp
public string[] RootRotationStatements { get; }
```

- *Type:* string[]

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.usernameTemplate"></a>

```csharp
public string UsernameTemplate { get; }
```

- *Type:* string

---

##### `VerifyConnection`<sup>Required</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.verifyConnection"></a>

```csharp
public object VerifyConnection { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlAuroraOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseSecretsMountMysqlLegacyList <a name="DatabaseSecretsMountMysqlLegacyList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountMysqlLegacyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.get"></a>

```csharp
private DatabaseSecretsMountMysqlLegacyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseSecretsMountMysqlLegacyOutputReference <a name="DatabaseSecretsMountMysqlLegacyOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountMysqlLegacyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetConnectionUrl">ResetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetMaxConnectionLifetime">ResetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetMaxIdleConnections">ResetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetMaxOpenConnections">ResetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetPluginName">ResetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetRootRotationStatements">ResetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetVerifyConnection">ResetVerifyConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetAllowedRoles"></a>

```csharp
private void ResetAllowedRoles()
```

##### `ResetConnectionUrl` <a name="ResetConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetConnectionUrl"></a>

```csharp
private void ResetConnectionUrl()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetData"></a>

```csharp
private void ResetData()
```

##### `ResetMaxConnectionLifetime` <a name="ResetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetMaxConnectionLifetime"></a>

```csharp
private void ResetMaxConnectionLifetime()
```

##### `ResetMaxIdleConnections` <a name="ResetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetMaxIdleConnections"></a>

```csharp
private void ResetMaxIdleConnections()
```

##### `ResetMaxOpenConnections` <a name="ResetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetMaxOpenConnections"></a>

```csharp
private void ResetMaxOpenConnections()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetPluginName"></a>

```csharp
private void ResetPluginName()
```

##### `ResetRootRotationStatements` <a name="ResetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetRootRotationStatements"></a>

```csharp
private void ResetRootRotationStatements()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetUsernameTemplate"></a>

```csharp
private void ResetUsernameTemplate()
```

##### `ResetVerifyConnection` <a name="ResetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.resetVerifyConnection"></a>

```csharp
private void ResetVerifyConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.connectionUrlInput">ConnectionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.dataInput">DataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.maxConnectionLifetimeInput">MaxConnectionLifetimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.maxIdleConnectionsInput">MaxIdleConnectionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.maxOpenConnectionsInput">MaxOpenConnectionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.pluginNameInput">PluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.rootRotationStatementsInput">RootRotationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.verifyConnectionInput">VerifyConnectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.connectionUrl">ConnectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.data">Data</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.pluginName">PluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.rootRotationStatements">RootRotationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.usernameTemplate">UsernameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.verifyConnection">VerifyConnection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.allowedRolesInput"></a>

```csharp
public string[] AllowedRolesInput { get; }
```

- *Type:* string[]

---

##### `ConnectionUrlInput`<sup>Optional</sup> <a name="ConnectionUrlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.connectionUrlInput"></a>

```csharp
public string ConnectionUrlInput { get; }
```

- *Type:* string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.dataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaxConnectionLifetimeInput`<sup>Optional</sup> <a name="MaxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.maxConnectionLifetimeInput"></a>

```csharp
public double MaxConnectionLifetimeInput { get; }
```

- *Type:* double

---

##### `MaxIdleConnectionsInput`<sup>Optional</sup> <a name="MaxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.maxIdleConnectionsInput"></a>

```csharp
public double MaxIdleConnectionsInput { get; }
```

- *Type:* double

---

##### `MaxOpenConnectionsInput`<sup>Optional</sup> <a name="MaxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.maxOpenConnectionsInput"></a>

```csharp
public double MaxOpenConnectionsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.pluginNameInput"></a>

```csharp
public string PluginNameInput { get; }
```

- *Type:* string

---

##### `RootRotationStatementsInput`<sup>Optional</sup> <a name="RootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.rootRotationStatementsInput"></a>

```csharp
public string[] RootRotationStatementsInput { get; }
```

- *Type:* string[]

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.usernameTemplateInput"></a>

```csharp
public string UsernameTemplateInput { get; }
```

- *Type:* string

---

##### `VerifyConnectionInput`<sup>Optional</sup> <a name="VerifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.verifyConnectionInput"></a>

```csharp
public object VerifyConnectionInput { get; }
```

- *Type:* object

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; }
```

- *Type:* string[]

---

##### `ConnectionUrl`<sup>Required</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.connectionUrl"></a>

```csharp
public string ConnectionUrl { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.data"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Data { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaxConnectionLifetime`<sup>Required</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.maxConnectionLifetime"></a>

```csharp
public double MaxConnectionLifetime { get; }
```

- *Type:* double

---

##### `MaxIdleConnections`<sup>Required</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.maxIdleConnections"></a>

```csharp
public double MaxIdleConnections { get; }
```

- *Type:* double

---

##### `MaxOpenConnections`<sup>Required</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.maxOpenConnections"></a>

```csharp
public double MaxOpenConnections { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.pluginName"></a>

```csharp
public string PluginName { get; }
```

- *Type:* string

---

##### `RootRotationStatements`<sup>Required</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.rootRotationStatements"></a>

```csharp
public string[] RootRotationStatements { get; }
```

- *Type:* string[]

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.usernameTemplate"></a>

```csharp
public string UsernameTemplate { get; }
```

- *Type:* string

---

##### `VerifyConnection`<sup>Required</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.verifyConnection"></a>

```csharp
public object VerifyConnection { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlLegacyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseSecretsMountMysqlList <a name="DatabaseSecretsMountMysqlList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountMysqlList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.get"></a>

```csharp
private DatabaseSecretsMountMysqlOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseSecretsMountMysqlOutputReference <a name="DatabaseSecretsMountMysqlOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountMysqlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetAuthType">ResetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetConnectionUrl">ResetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetMaxConnectionLifetime">ResetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetMaxIdleConnections">ResetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetMaxOpenConnections">ResetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetPluginName">ResetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetRootRotationStatements">ResetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetServiceAccountJson">ResetServiceAccountJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetTlsCa">ResetTlsCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetTlsCertificateKey">ResetTlsCertificateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetVerifyConnection">ResetVerifyConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetAllowedRoles"></a>

```csharp
private void ResetAllowedRoles()
```

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetAuthType"></a>

```csharp
private void ResetAuthType()
```

##### `ResetConnectionUrl` <a name="ResetConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetConnectionUrl"></a>

```csharp
private void ResetConnectionUrl()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetData"></a>

```csharp
private void ResetData()
```

##### `ResetMaxConnectionLifetime` <a name="ResetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetMaxConnectionLifetime"></a>

```csharp
private void ResetMaxConnectionLifetime()
```

##### `ResetMaxIdleConnections` <a name="ResetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetMaxIdleConnections"></a>

```csharp
private void ResetMaxIdleConnections()
```

##### `ResetMaxOpenConnections` <a name="ResetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetMaxOpenConnections"></a>

```csharp
private void ResetMaxOpenConnections()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetPluginName"></a>

```csharp
private void ResetPluginName()
```

##### `ResetRootRotationStatements` <a name="ResetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetRootRotationStatements"></a>

```csharp
private void ResetRootRotationStatements()
```

##### `ResetServiceAccountJson` <a name="ResetServiceAccountJson" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetServiceAccountJson"></a>

```csharp
private void ResetServiceAccountJson()
```

##### `ResetTlsCa` <a name="ResetTlsCa" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetTlsCa"></a>

```csharp
private void ResetTlsCa()
```

##### `ResetTlsCertificateKey` <a name="ResetTlsCertificateKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetTlsCertificateKey"></a>

```csharp
private void ResetTlsCertificateKey()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetUsernameTemplate"></a>

```csharp
private void ResetUsernameTemplate()
```

##### `ResetVerifyConnection` <a name="ResetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.resetVerifyConnection"></a>

```csharp
private void ResetVerifyConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.connectionUrlInput">ConnectionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.dataInput">DataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.maxConnectionLifetimeInput">MaxConnectionLifetimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.maxIdleConnectionsInput">MaxIdleConnectionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.maxOpenConnectionsInput">MaxOpenConnectionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.pluginNameInput">PluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.rootRotationStatementsInput">RootRotationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.serviceAccountJsonInput">ServiceAccountJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.tlsCaInput">TlsCaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.tlsCertificateKeyInput">TlsCertificateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.verifyConnectionInput">VerifyConnectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.authType">AuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.connectionUrl">ConnectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.data">Data</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.pluginName">PluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.rootRotationStatements">RootRotationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.serviceAccountJson">ServiceAccountJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.tlsCa">TlsCa</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.tlsCertificateKey">TlsCertificateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.usernameTemplate">UsernameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.verifyConnection">VerifyConnection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.allowedRolesInput"></a>

```csharp
public string[] AllowedRolesInput { get; }
```

- *Type:* string[]

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.authTypeInput"></a>

```csharp
public string AuthTypeInput { get; }
```

- *Type:* string

---

##### `ConnectionUrlInput`<sup>Optional</sup> <a name="ConnectionUrlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.connectionUrlInput"></a>

```csharp
public string ConnectionUrlInput { get; }
```

- *Type:* string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.dataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaxConnectionLifetimeInput`<sup>Optional</sup> <a name="MaxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.maxConnectionLifetimeInput"></a>

```csharp
public double MaxConnectionLifetimeInput { get; }
```

- *Type:* double

---

##### `MaxIdleConnectionsInput`<sup>Optional</sup> <a name="MaxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.maxIdleConnectionsInput"></a>

```csharp
public double MaxIdleConnectionsInput { get; }
```

- *Type:* double

---

##### `MaxOpenConnectionsInput`<sup>Optional</sup> <a name="MaxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.maxOpenConnectionsInput"></a>

```csharp
public double MaxOpenConnectionsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.pluginNameInput"></a>

```csharp
public string PluginNameInput { get; }
```

- *Type:* string

---

##### `RootRotationStatementsInput`<sup>Optional</sup> <a name="RootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.rootRotationStatementsInput"></a>

```csharp
public string[] RootRotationStatementsInput { get; }
```

- *Type:* string[]

---

##### `ServiceAccountJsonInput`<sup>Optional</sup> <a name="ServiceAccountJsonInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.serviceAccountJsonInput"></a>

```csharp
public string ServiceAccountJsonInput { get; }
```

- *Type:* string

---

##### `TlsCaInput`<sup>Optional</sup> <a name="TlsCaInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.tlsCaInput"></a>

```csharp
public string TlsCaInput { get; }
```

- *Type:* string

---

##### `TlsCertificateKeyInput`<sup>Optional</sup> <a name="TlsCertificateKeyInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.tlsCertificateKeyInput"></a>

```csharp
public string TlsCertificateKeyInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.usernameTemplateInput"></a>

```csharp
public string UsernameTemplateInput { get; }
```

- *Type:* string

---

##### `VerifyConnectionInput`<sup>Optional</sup> <a name="VerifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.verifyConnectionInput"></a>

```csharp
public object VerifyConnectionInput { get; }
```

- *Type:* object

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; }
```

- *Type:* string[]

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.authType"></a>

```csharp
public string AuthType { get; }
```

- *Type:* string

---

##### `ConnectionUrl`<sup>Required</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.connectionUrl"></a>

```csharp
public string ConnectionUrl { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.data"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Data { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaxConnectionLifetime`<sup>Required</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.maxConnectionLifetime"></a>

```csharp
public double MaxConnectionLifetime { get; }
```

- *Type:* double

---

##### `MaxIdleConnections`<sup>Required</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.maxIdleConnections"></a>

```csharp
public double MaxIdleConnections { get; }
```

- *Type:* double

---

##### `MaxOpenConnections`<sup>Required</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.maxOpenConnections"></a>

```csharp
public double MaxOpenConnections { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.pluginName"></a>

```csharp
public string PluginName { get; }
```

- *Type:* string

---

##### `RootRotationStatements`<sup>Required</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.rootRotationStatements"></a>

```csharp
public string[] RootRotationStatements { get; }
```

- *Type:* string[]

---

##### `ServiceAccountJson`<sup>Required</sup> <a name="ServiceAccountJson" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.serviceAccountJson"></a>

```csharp
public string ServiceAccountJson { get; }
```

- *Type:* string

---

##### `TlsCa`<sup>Required</sup> <a name="TlsCa" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.tlsCa"></a>

```csharp
public string TlsCa { get; }
```

- *Type:* string

---

##### `TlsCertificateKey`<sup>Required</sup> <a name="TlsCertificateKey" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.tlsCertificateKey"></a>

```csharp
public string TlsCertificateKey { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.usernameTemplate"></a>

```csharp
public string UsernameTemplate { get; }
```

- *Type:* string

---

##### `VerifyConnection`<sup>Required</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.verifyConnection"></a>

```csharp
public object VerifyConnection { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseSecretsMountMysqlRdsList <a name="DatabaseSecretsMountMysqlRdsList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountMysqlRdsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.get"></a>

```csharp
private DatabaseSecretsMountMysqlRdsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseSecretsMountMysqlRdsOutputReference <a name="DatabaseSecretsMountMysqlRdsOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountMysqlRdsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetConnectionUrl">ResetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetMaxConnectionLifetime">ResetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetMaxIdleConnections">ResetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetMaxOpenConnections">ResetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetPluginName">ResetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetRootRotationStatements">ResetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetVerifyConnection">ResetVerifyConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetAllowedRoles"></a>

```csharp
private void ResetAllowedRoles()
```

##### `ResetConnectionUrl` <a name="ResetConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetConnectionUrl"></a>

```csharp
private void ResetConnectionUrl()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetData"></a>

```csharp
private void ResetData()
```

##### `ResetMaxConnectionLifetime` <a name="ResetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetMaxConnectionLifetime"></a>

```csharp
private void ResetMaxConnectionLifetime()
```

##### `ResetMaxIdleConnections` <a name="ResetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetMaxIdleConnections"></a>

```csharp
private void ResetMaxIdleConnections()
```

##### `ResetMaxOpenConnections` <a name="ResetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetMaxOpenConnections"></a>

```csharp
private void ResetMaxOpenConnections()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetPluginName"></a>

```csharp
private void ResetPluginName()
```

##### `ResetRootRotationStatements` <a name="ResetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetRootRotationStatements"></a>

```csharp
private void ResetRootRotationStatements()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetUsernameTemplate"></a>

```csharp
private void ResetUsernameTemplate()
```

##### `ResetVerifyConnection` <a name="ResetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.resetVerifyConnection"></a>

```csharp
private void ResetVerifyConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.connectionUrlInput">ConnectionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.dataInput">DataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.maxConnectionLifetimeInput">MaxConnectionLifetimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.maxIdleConnectionsInput">MaxIdleConnectionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.maxOpenConnectionsInput">MaxOpenConnectionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.pluginNameInput">PluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.rootRotationStatementsInput">RootRotationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.verifyConnectionInput">VerifyConnectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.connectionUrl">ConnectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.data">Data</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.pluginName">PluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.rootRotationStatements">RootRotationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.usernameTemplate">UsernameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.verifyConnection">VerifyConnection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.allowedRolesInput"></a>

```csharp
public string[] AllowedRolesInput { get; }
```

- *Type:* string[]

---

##### `ConnectionUrlInput`<sup>Optional</sup> <a name="ConnectionUrlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.connectionUrlInput"></a>

```csharp
public string ConnectionUrlInput { get; }
```

- *Type:* string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.dataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaxConnectionLifetimeInput`<sup>Optional</sup> <a name="MaxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.maxConnectionLifetimeInput"></a>

```csharp
public double MaxConnectionLifetimeInput { get; }
```

- *Type:* double

---

##### `MaxIdleConnectionsInput`<sup>Optional</sup> <a name="MaxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.maxIdleConnectionsInput"></a>

```csharp
public double MaxIdleConnectionsInput { get; }
```

- *Type:* double

---

##### `MaxOpenConnectionsInput`<sup>Optional</sup> <a name="MaxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.maxOpenConnectionsInput"></a>

```csharp
public double MaxOpenConnectionsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.pluginNameInput"></a>

```csharp
public string PluginNameInput { get; }
```

- *Type:* string

---

##### `RootRotationStatementsInput`<sup>Optional</sup> <a name="RootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.rootRotationStatementsInput"></a>

```csharp
public string[] RootRotationStatementsInput { get; }
```

- *Type:* string[]

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.usernameTemplateInput"></a>

```csharp
public string UsernameTemplateInput { get; }
```

- *Type:* string

---

##### `VerifyConnectionInput`<sup>Optional</sup> <a name="VerifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.verifyConnectionInput"></a>

```csharp
public object VerifyConnectionInput { get; }
```

- *Type:* object

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; }
```

- *Type:* string[]

---

##### `ConnectionUrl`<sup>Required</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.connectionUrl"></a>

```csharp
public string ConnectionUrl { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.data"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Data { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaxConnectionLifetime`<sup>Required</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.maxConnectionLifetime"></a>

```csharp
public double MaxConnectionLifetime { get; }
```

- *Type:* double

---

##### `MaxIdleConnections`<sup>Required</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.maxIdleConnections"></a>

```csharp
public double MaxIdleConnections { get; }
```

- *Type:* double

---

##### `MaxOpenConnections`<sup>Required</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.maxOpenConnections"></a>

```csharp
public double MaxOpenConnections { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.pluginName"></a>

```csharp
public string PluginName { get; }
```

- *Type:* string

---

##### `RootRotationStatements`<sup>Required</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.rootRotationStatements"></a>

```csharp
public string[] RootRotationStatements { get; }
```

- *Type:* string[]

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.usernameTemplate"></a>

```csharp
public string UsernameTemplate { get; }
```

- *Type:* string

---

##### `VerifyConnection`<sup>Required</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.verifyConnection"></a>

```csharp
public object VerifyConnection { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountMysqlRdsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseSecretsMountOracleList <a name="DatabaseSecretsMountOracleList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountOracleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.get"></a>

```csharp
private DatabaseSecretsMountOracleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseSecretsMountOracleOutputReference <a name="DatabaseSecretsMountOracleOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountOracleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetConnectionUrl">ResetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetMaxConnectionLifetime">ResetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetMaxIdleConnections">ResetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetMaxOpenConnections">ResetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetPluginName">ResetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetRootRotationStatements">ResetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetVerifyConnection">ResetVerifyConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetAllowedRoles"></a>

```csharp
private void ResetAllowedRoles()
```

##### `ResetConnectionUrl` <a name="ResetConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetConnectionUrl"></a>

```csharp
private void ResetConnectionUrl()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetData"></a>

```csharp
private void ResetData()
```

##### `ResetMaxConnectionLifetime` <a name="ResetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetMaxConnectionLifetime"></a>

```csharp
private void ResetMaxConnectionLifetime()
```

##### `ResetMaxIdleConnections` <a name="ResetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetMaxIdleConnections"></a>

```csharp
private void ResetMaxIdleConnections()
```

##### `ResetMaxOpenConnections` <a name="ResetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetMaxOpenConnections"></a>

```csharp
private void ResetMaxOpenConnections()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetPluginName"></a>

```csharp
private void ResetPluginName()
```

##### `ResetRootRotationStatements` <a name="ResetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetRootRotationStatements"></a>

```csharp
private void ResetRootRotationStatements()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetUsernameTemplate"></a>

```csharp
private void ResetUsernameTemplate()
```

##### `ResetVerifyConnection` <a name="ResetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.resetVerifyConnection"></a>

```csharp
private void ResetVerifyConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.connectionUrlInput">ConnectionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.dataInput">DataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.maxConnectionLifetimeInput">MaxConnectionLifetimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.maxIdleConnectionsInput">MaxIdleConnectionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.maxOpenConnectionsInput">MaxOpenConnectionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.pluginNameInput">PluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.rootRotationStatementsInput">RootRotationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.verifyConnectionInput">VerifyConnectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.connectionUrl">ConnectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.data">Data</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.pluginName">PluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.rootRotationStatements">RootRotationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.usernameTemplate">UsernameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.verifyConnection">VerifyConnection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.allowedRolesInput"></a>

```csharp
public string[] AllowedRolesInput { get; }
```

- *Type:* string[]

---

##### `ConnectionUrlInput`<sup>Optional</sup> <a name="ConnectionUrlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.connectionUrlInput"></a>

```csharp
public string ConnectionUrlInput { get; }
```

- *Type:* string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.dataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaxConnectionLifetimeInput`<sup>Optional</sup> <a name="MaxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.maxConnectionLifetimeInput"></a>

```csharp
public double MaxConnectionLifetimeInput { get; }
```

- *Type:* double

---

##### `MaxIdleConnectionsInput`<sup>Optional</sup> <a name="MaxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.maxIdleConnectionsInput"></a>

```csharp
public double MaxIdleConnectionsInput { get; }
```

- *Type:* double

---

##### `MaxOpenConnectionsInput`<sup>Optional</sup> <a name="MaxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.maxOpenConnectionsInput"></a>

```csharp
public double MaxOpenConnectionsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.pluginNameInput"></a>

```csharp
public string PluginNameInput { get; }
```

- *Type:* string

---

##### `RootRotationStatementsInput`<sup>Optional</sup> <a name="RootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.rootRotationStatementsInput"></a>

```csharp
public string[] RootRotationStatementsInput { get; }
```

- *Type:* string[]

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.usernameTemplateInput"></a>

```csharp
public string UsernameTemplateInput { get; }
```

- *Type:* string

---

##### `VerifyConnectionInput`<sup>Optional</sup> <a name="VerifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.verifyConnectionInput"></a>

```csharp
public object VerifyConnectionInput { get; }
```

- *Type:* object

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; }
```

- *Type:* string[]

---

##### `ConnectionUrl`<sup>Required</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.connectionUrl"></a>

```csharp
public string ConnectionUrl { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.data"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Data { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaxConnectionLifetime`<sup>Required</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.maxConnectionLifetime"></a>

```csharp
public double MaxConnectionLifetime { get; }
```

- *Type:* double

---

##### `MaxIdleConnections`<sup>Required</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.maxIdleConnections"></a>

```csharp
public double MaxIdleConnections { get; }
```

- *Type:* double

---

##### `MaxOpenConnections`<sup>Required</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.maxOpenConnections"></a>

```csharp
public double MaxOpenConnections { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.pluginName"></a>

```csharp
public string PluginName { get; }
```

- *Type:* string

---

##### `RootRotationStatements`<sup>Required</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.rootRotationStatements"></a>

```csharp
public string[] RootRotationStatements { get; }
```

- *Type:* string[]

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.usernameTemplate"></a>

```csharp
public string UsernameTemplate { get; }
```

- *Type:* string

---

##### `VerifyConnection`<sup>Required</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.verifyConnection"></a>

```csharp
public object VerifyConnection { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountOracleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseSecretsMountPostgresqlList <a name="DatabaseSecretsMountPostgresqlList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountPostgresqlList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.get"></a>

```csharp
private DatabaseSecretsMountPostgresqlOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseSecretsMountPostgresqlOutputReference <a name="DatabaseSecretsMountPostgresqlOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountPostgresqlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetAuthType">ResetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetConnectionUrl">ResetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetDisableEscaping">ResetDisableEscaping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetMaxConnectionLifetime">ResetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetMaxIdleConnections">ResetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetMaxOpenConnections">ResetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetPluginName">ResetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetRootRotationStatements">ResetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetServiceAccountJson">ResetServiceAccountJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetVerifyConnection">ResetVerifyConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetAllowedRoles"></a>

```csharp
private void ResetAllowedRoles()
```

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetAuthType"></a>

```csharp
private void ResetAuthType()
```

##### `ResetConnectionUrl` <a name="ResetConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetConnectionUrl"></a>

```csharp
private void ResetConnectionUrl()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetData"></a>

```csharp
private void ResetData()
```

##### `ResetDisableEscaping` <a name="ResetDisableEscaping" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetDisableEscaping"></a>

```csharp
private void ResetDisableEscaping()
```

##### `ResetMaxConnectionLifetime` <a name="ResetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetMaxConnectionLifetime"></a>

```csharp
private void ResetMaxConnectionLifetime()
```

##### `ResetMaxIdleConnections` <a name="ResetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetMaxIdleConnections"></a>

```csharp
private void ResetMaxIdleConnections()
```

##### `ResetMaxOpenConnections` <a name="ResetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetMaxOpenConnections"></a>

```csharp
private void ResetMaxOpenConnections()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetPluginName"></a>

```csharp
private void ResetPluginName()
```

##### `ResetRootRotationStatements` <a name="ResetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetRootRotationStatements"></a>

```csharp
private void ResetRootRotationStatements()
```

##### `ResetServiceAccountJson` <a name="ResetServiceAccountJson" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetServiceAccountJson"></a>

```csharp
private void ResetServiceAccountJson()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetUsernameTemplate"></a>

```csharp
private void ResetUsernameTemplate()
```

##### `ResetVerifyConnection` <a name="ResetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.resetVerifyConnection"></a>

```csharp
private void ResetVerifyConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.connectionUrlInput">ConnectionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.dataInput">DataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.disableEscapingInput">DisableEscapingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.maxConnectionLifetimeInput">MaxConnectionLifetimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.maxIdleConnectionsInput">MaxIdleConnectionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.maxOpenConnectionsInput">MaxOpenConnectionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.pluginNameInput">PluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.rootRotationStatementsInput">RootRotationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.serviceAccountJsonInput">ServiceAccountJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.verifyConnectionInput">VerifyConnectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.authType">AuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.connectionUrl">ConnectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.data">Data</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.disableEscaping">DisableEscaping</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.pluginName">PluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.rootRotationStatements">RootRotationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.serviceAccountJson">ServiceAccountJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.usernameTemplate">UsernameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.verifyConnection">VerifyConnection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.allowedRolesInput"></a>

```csharp
public string[] AllowedRolesInput { get; }
```

- *Type:* string[]

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.authTypeInput"></a>

```csharp
public string AuthTypeInput { get; }
```

- *Type:* string

---

##### `ConnectionUrlInput`<sup>Optional</sup> <a name="ConnectionUrlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.connectionUrlInput"></a>

```csharp
public string ConnectionUrlInput { get; }
```

- *Type:* string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.dataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisableEscapingInput`<sup>Optional</sup> <a name="DisableEscapingInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.disableEscapingInput"></a>

```csharp
public object DisableEscapingInput { get; }
```

- *Type:* object

---

##### `MaxConnectionLifetimeInput`<sup>Optional</sup> <a name="MaxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.maxConnectionLifetimeInput"></a>

```csharp
public double MaxConnectionLifetimeInput { get; }
```

- *Type:* double

---

##### `MaxIdleConnectionsInput`<sup>Optional</sup> <a name="MaxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.maxIdleConnectionsInput"></a>

```csharp
public double MaxIdleConnectionsInput { get; }
```

- *Type:* double

---

##### `MaxOpenConnectionsInput`<sup>Optional</sup> <a name="MaxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.maxOpenConnectionsInput"></a>

```csharp
public double MaxOpenConnectionsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.pluginNameInput"></a>

```csharp
public string PluginNameInput { get; }
```

- *Type:* string

---

##### `RootRotationStatementsInput`<sup>Optional</sup> <a name="RootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.rootRotationStatementsInput"></a>

```csharp
public string[] RootRotationStatementsInput { get; }
```

- *Type:* string[]

---

##### `ServiceAccountJsonInput`<sup>Optional</sup> <a name="ServiceAccountJsonInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.serviceAccountJsonInput"></a>

```csharp
public string ServiceAccountJsonInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.usernameTemplateInput"></a>

```csharp
public string UsernameTemplateInput { get; }
```

- *Type:* string

---

##### `VerifyConnectionInput`<sup>Optional</sup> <a name="VerifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.verifyConnectionInput"></a>

```csharp
public object VerifyConnectionInput { get; }
```

- *Type:* object

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; }
```

- *Type:* string[]

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.authType"></a>

```csharp
public string AuthType { get; }
```

- *Type:* string

---

##### `ConnectionUrl`<sup>Required</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.connectionUrl"></a>

```csharp
public string ConnectionUrl { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.data"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Data { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisableEscaping`<sup>Required</sup> <a name="DisableEscaping" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.disableEscaping"></a>

```csharp
public object DisableEscaping { get; }
```

- *Type:* object

---

##### `MaxConnectionLifetime`<sup>Required</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.maxConnectionLifetime"></a>

```csharp
public double MaxConnectionLifetime { get; }
```

- *Type:* double

---

##### `MaxIdleConnections`<sup>Required</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.maxIdleConnections"></a>

```csharp
public double MaxIdleConnections { get; }
```

- *Type:* double

---

##### `MaxOpenConnections`<sup>Required</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.maxOpenConnections"></a>

```csharp
public double MaxOpenConnections { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.pluginName"></a>

```csharp
public string PluginName { get; }
```

- *Type:* string

---

##### `RootRotationStatements`<sup>Required</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.rootRotationStatements"></a>

```csharp
public string[] RootRotationStatements { get; }
```

- *Type:* string[]

---

##### `ServiceAccountJson`<sup>Required</sup> <a name="ServiceAccountJson" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.serviceAccountJson"></a>

```csharp
public string ServiceAccountJson { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.usernameTemplate"></a>

```csharp
public string UsernameTemplate { get; }
```

- *Type:* string

---

##### `VerifyConnection`<sup>Required</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.verifyConnection"></a>

```csharp
public object VerifyConnection { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountPostgresqlOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseSecretsMountRedisElasticacheList <a name="DatabaseSecretsMountRedisElasticacheList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountRedisElasticacheList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.get"></a>

```csharp
private DatabaseSecretsMountRedisElasticacheOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseSecretsMountRedisElasticacheOutputReference <a name="DatabaseSecretsMountRedisElasticacheOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountRedisElasticacheOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetPluginName">ResetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetRootRotationStatements">ResetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetVerifyConnection">ResetVerifyConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetAllowedRoles"></a>

```csharp
private void ResetAllowedRoles()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetData"></a>

```csharp
private void ResetData()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetPluginName"></a>

```csharp
private void ResetPluginName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRootRotationStatements` <a name="ResetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetRootRotationStatements"></a>

```csharp
private void ResetRootRotationStatements()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```

##### `ResetVerifyConnection` <a name="ResetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.resetVerifyConnection"></a>

```csharp
private void ResetVerifyConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.dataInput">DataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.pluginNameInput">PluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.rootRotationStatementsInput">RootRotationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.verifyConnectionInput">VerifyConnectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.data">Data</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.pluginName">PluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.rootRotationStatements">RootRotationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.verifyConnection">VerifyConnection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.allowedRolesInput"></a>

```csharp
public string[] AllowedRolesInput { get; }
```

- *Type:* string[]

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.dataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.pluginNameInput"></a>

```csharp
public string PluginNameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RootRotationStatementsInput`<sup>Optional</sup> <a name="RootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.rootRotationStatementsInput"></a>

```csharp
public string[] RootRotationStatementsInput { get; }
```

- *Type:* string[]

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `VerifyConnectionInput`<sup>Optional</sup> <a name="VerifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.verifyConnectionInput"></a>

```csharp
public object VerifyConnectionInput { get; }
```

- *Type:* object

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; }
```

- *Type:* string[]

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.data"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Data { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.pluginName"></a>

```csharp
public string PluginName { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RootRotationStatements`<sup>Required</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.rootRotationStatements"></a>

```csharp
public string[] RootRotationStatements { get; }
```

- *Type:* string[]

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `VerifyConnection`<sup>Required</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.verifyConnection"></a>

```csharp
public object VerifyConnection { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisElasticacheOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseSecretsMountRedisList <a name="DatabaseSecretsMountRedisList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountRedisList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.get"></a>

```csharp
private DatabaseSecretsMountRedisOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseSecretsMountRedisOutputReference <a name="DatabaseSecretsMountRedisOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountRedisOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetCaCert">ResetCaCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetInsecureTls">ResetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetPluginName">ResetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetRootRotationStatements">ResetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetTls">ResetTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetVerifyConnection">ResetVerifyConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetAllowedRoles"></a>

```csharp
private void ResetAllowedRoles()
```

##### `ResetCaCert` <a name="ResetCaCert" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetCaCert"></a>

```csharp
private void ResetCaCert()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetData"></a>

```csharp
private void ResetData()
```

##### `ResetInsecureTls` <a name="ResetInsecureTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetInsecureTls"></a>

```csharp
private void ResetInsecureTls()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetPluginName"></a>

```csharp
private void ResetPluginName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetRootRotationStatements` <a name="ResetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetRootRotationStatements"></a>

```csharp
private void ResetRootRotationStatements()
```

##### `ResetTls` <a name="ResetTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetTls"></a>

```csharp
private void ResetTls()
```

##### `ResetVerifyConnection` <a name="ResetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.resetVerifyConnection"></a>

```csharp
private void ResetVerifyConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.caCertInput">CaCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.dataInput">DataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.insecureTlsInput">InsecureTlsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.pluginNameInput">PluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.rootRotationStatementsInput">RootRotationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.tlsInput">TlsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.verifyConnectionInput">VerifyConnectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.caCert">CaCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.data">Data</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.insecureTls">InsecureTls</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.pluginName">PluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.rootRotationStatements">RootRotationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.tls">Tls</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.verifyConnection">VerifyConnection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.allowedRolesInput"></a>

```csharp
public string[] AllowedRolesInput { get; }
```

- *Type:* string[]

---

##### `CaCertInput`<sup>Optional</sup> <a name="CaCertInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.caCertInput"></a>

```csharp
public string CaCertInput { get; }
```

- *Type:* string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.dataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `InsecureTlsInput`<sup>Optional</sup> <a name="InsecureTlsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.insecureTlsInput"></a>

```csharp
public object InsecureTlsInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.pluginNameInput"></a>

```csharp
public string PluginNameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `RootRotationStatementsInput`<sup>Optional</sup> <a name="RootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.rootRotationStatementsInput"></a>

```csharp
public string[] RootRotationStatementsInput { get; }
```

- *Type:* string[]

---

##### `TlsInput`<sup>Optional</sup> <a name="TlsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.tlsInput"></a>

```csharp
public object TlsInput { get; }
```

- *Type:* object

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `VerifyConnectionInput`<sup>Optional</sup> <a name="VerifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.verifyConnectionInput"></a>

```csharp
public object VerifyConnectionInput { get; }
```

- *Type:* object

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; }
```

- *Type:* string[]

---

##### `CaCert`<sup>Required</sup> <a name="CaCert" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.caCert"></a>

```csharp
public string CaCert { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.data"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Data { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `InsecureTls`<sup>Required</sup> <a name="InsecureTls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.insecureTls"></a>

```csharp
public object InsecureTls { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.pluginName"></a>

```csharp
public string PluginName { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `RootRotationStatements`<sup>Required</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.rootRotationStatements"></a>

```csharp
public string[] RootRotationStatements { get; }
```

- *Type:* string[]

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.tls"></a>

```csharp
public object Tls { get; }
```

- *Type:* object

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `VerifyConnection`<sup>Required</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.verifyConnection"></a>

```csharp
public object VerifyConnection { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedisOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseSecretsMountRedshiftList <a name="DatabaseSecretsMountRedshiftList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountRedshiftList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.get"></a>

```csharp
private DatabaseSecretsMountRedshiftOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseSecretsMountRedshiftOutputReference <a name="DatabaseSecretsMountRedshiftOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountRedshiftOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetConnectionUrl">ResetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetDisableEscaping">ResetDisableEscaping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetMaxConnectionLifetime">ResetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetMaxIdleConnections">ResetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetMaxOpenConnections">ResetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetPluginName">ResetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetRootRotationStatements">ResetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetVerifyConnection">ResetVerifyConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetAllowedRoles"></a>

```csharp
private void ResetAllowedRoles()
```

##### `ResetConnectionUrl` <a name="ResetConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetConnectionUrl"></a>

```csharp
private void ResetConnectionUrl()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetData"></a>

```csharp
private void ResetData()
```

##### `ResetDisableEscaping` <a name="ResetDisableEscaping" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetDisableEscaping"></a>

```csharp
private void ResetDisableEscaping()
```

##### `ResetMaxConnectionLifetime` <a name="ResetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetMaxConnectionLifetime"></a>

```csharp
private void ResetMaxConnectionLifetime()
```

##### `ResetMaxIdleConnections` <a name="ResetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetMaxIdleConnections"></a>

```csharp
private void ResetMaxIdleConnections()
```

##### `ResetMaxOpenConnections` <a name="ResetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetMaxOpenConnections"></a>

```csharp
private void ResetMaxOpenConnections()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetPluginName"></a>

```csharp
private void ResetPluginName()
```

##### `ResetRootRotationStatements` <a name="ResetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetRootRotationStatements"></a>

```csharp
private void ResetRootRotationStatements()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetUsernameTemplate"></a>

```csharp
private void ResetUsernameTemplate()
```

##### `ResetVerifyConnection` <a name="ResetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.resetVerifyConnection"></a>

```csharp
private void ResetVerifyConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.connectionUrlInput">ConnectionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.dataInput">DataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.disableEscapingInput">DisableEscapingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.maxConnectionLifetimeInput">MaxConnectionLifetimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.maxIdleConnectionsInput">MaxIdleConnectionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.maxOpenConnectionsInput">MaxOpenConnectionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.pluginNameInput">PluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.rootRotationStatementsInput">RootRotationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.verifyConnectionInput">VerifyConnectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.connectionUrl">ConnectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.data">Data</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.disableEscaping">DisableEscaping</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.pluginName">PluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.rootRotationStatements">RootRotationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.usernameTemplate">UsernameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.verifyConnection">VerifyConnection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.allowedRolesInput"></a>

```csharp
public string[] AllowedRolesInput { get; }
```

- *Type:* string[]

---

##### `ConnectionUrlInput`<sup>Optional</sup> <a name="ConnectionUrlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.connectionUrlInput"></a>

```csharp
public string ConnectionUrlInput { get; }
```

- *Type:* string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.dataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisableEscapingInput`<sup>Optional</sup> <a name="DisableEscapingInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.disableEscapingInput"></a>

```csharp
public object DisableEscapingInput { get; }
```

- *Type:* object

---

##### `MaxConnectionLifetimeInput`<sup>Optional</sup> <a name="MaxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.maxConnectionLifetimeInput"></a>

```csharp
public double MaxConnectionLifetimeInput { get; }
```

- *Type:* double

---

##### `MaxIdleConnectionsInput`<sup>Optional</sup> <a name="MaxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.maxIdleConnectionsInput"></a>

```csharp
public double MaxIdleConnectionsInput { get; }
```

- *Type:* double

---

##### `MaxOpenConnectionsInput`<sup>Optional</sup> <a name="MaxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.maxOpenConnectionsInput"></a>

```csharp
public double MaxOpenConnectionsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.pluginNameInput"></a>

```csharp
public string PluginNameInput { get; }
```

- *Type:* string

---

##### `RootRotationStatementsInput`<sup>Optional</sup> <a name="RootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.rootRotationStatementsInput"></a>

```csharp
public string[] RootRotationStatementsInput { get; }
```

- *Type:* string[]

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.usernameTemplateInput"></a>

```csharp
public string UsernameTemplateInput { get; }
```

- *Type:* string

---

##### `VerifyConnectionInput`<sup>Optional</sup> <a name="VerifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.verifyConnectionInput"></a>

```csharp
public object VerifyConnectionInput { get; }
```

- *Type:* object

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; }
```

- *Type:* string[]

---

##### `ConnectionUrl`<sup>Required</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.connectionUrl"></a>

```csharp
public string ConnectionUrl { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.data"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Data { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisableEscaping`<sup>Required</sup> <a name="DisableEscaping" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.disableEscaping"></a>

```csharp
public object DisableEscaping { get; }
```

- *Type:* object

---

##### `MaxConnectionLifetime`<sup>Required</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.maxConnectionLifetime"></a>

```csharp
public double MaxConnectionLifetime { get; }
```

- *Type:* double

---

##### `MaxIdleConnections`<sup>Required</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.maxIdleConnections"></a>

```csharp
public double MaxIdleConnections { get; }
```

- *Type:* double

---

##### `MaxOpenConnections`<sup>Required</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.maxOpenConnections"></a>

```csharp
public double MaxOpenConnections { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.pluginName"></a>

```csharp
public string PluginName { get; }
```

- *Type:* string

---

##### `RootRotationStatements`<sup>Required</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.rootRotationStatements"></a>

```csharp
public string[] RootRotationStatements { get; }
```

- *Type:* string[]

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.usernameTemplate"></a>

```csharp
public string UsernameTemplate { get; }
```

- *Type:* string

---

##### `VerifyConnection`<sup>Required</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.verifyConnection"></a>

```csharp
public object VerifyConnection { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountRedshiftOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseSecretsMountSnowflakeList <a name="DatabaseSecretsMountSnowflakeList" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountSnowflakeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.get"></a>

```csharp
private DatabaseSecretsMountSnowflakeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseSecretsMountSnowflakeOutputReference <a name="DatabaseSecretsMountSnowflakeOutputReference" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretsMountSnowflakeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetConnectionUrl">ResetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetMaxConnectionLifetime">ResetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetMaxIdleConnections">ResetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetMaxOpenConnections">ResetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetPluginName">ResetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetRootRotationStatements">ResetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetVerifyConnection">ResetVerifyConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetAllowedRoles"></a>

```csharp
private void ResetAllowedRoles()
```

##### `ResetConnectionUrl` <a name="ResetConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetConnectionUrl"></a>

```csharp
private void ResetConnectionUrl()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetData"></a>

```csharp
private void ResetData()
```

##### `ResetMaxConnectionLifetime` <a name="ResetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetMaxConnectionLifetime"></a>

```csharp
private void ResetMaxConnectionLifetime()
```

##### `ResetMaxIdleConnections` <a name="ResetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetMaxIdleConnections"></a>

```csharp
private void ResetMaxIdleConnections()
```

##### `ResetMaxOpenConnections` <a name="ResetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetMaxOpenConnections"></a>

```csharp
private void ResetMaxOpenConnections()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetPluginName"></a>

```csharp
private void ResetPluginName()
```

##### `ResetRootRotationStatements` <a name="ResetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetRootRotationStatements"></a>

```csharp
private void ResetRootRotationStatements()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetUsernameTemplate"></a>

```csharp
private void ResetUsernameTemplate()
```

##### `ResetVerifyConnection` <a name="ResetVerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.resetVerifyConnection"></a>

```csharp
private void ResetVerifyConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.connectionUrlInput">ConnectionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.dataInput">DataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.maxConnectionLifetimeInput">MaxConnectionLifetimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.maxIdleConnectionsInput">MaxIdleConnectionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.maxOpenConnectionsInput">MaxOpenConnectionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.pluginNameInput">PluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.rootRotationStatementsInput">RootRotationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.verifyConnectionInput">VerifyConnectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.connectionUrl">ConnectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.data">Data</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.pluginName">PluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.rootRotationStatements">RootRotationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.usernameTemplate">UsernameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.verifyConnection">VerifyConnection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.allowedRolesInput"></a>

```csharp
public string[] AllowedRolesInput { get; }
```

- *Type:* string[]

---

##### `ConnectionUrlInput`<sup>Optional</sup> <a name="ConnectionUrlInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.connectionUrlInput"></a>

```csharp
public string ConnectionUrlInput { get; }
```

- *Type:* string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.dataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaxConnectionLifetimeInput`<sup>Optional</sup> <a name="MaxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.maxConnectionLifetimeInput"></a>

```csharp
public double MaxConnectionLifetimeInput { get; }
```

- *Type:* double

---

##### `MaxIdleConnectionsInput`<sup>Optional</sup> <a name="MaxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.maxIdleConnectionsInput"></a>

```csharp
public double MaxIdleConnectionsInput { get; }
```

- *Type:* double

---

##### `MaxOpenConnectionsInput`<sup>Optional</sup> <a name="MaxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.maxOpenConnectionsInput"></a>

```csharp
public double MaxOpenConnectionsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.pluginNameInput"></a>

```csharp
public string PluginNameInput { get; }
```

- *Type:* string

---

##### `RootRotationStatementsInput`<sup>Optional</sup> <a name="RootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.rootRotationStatementsInput"></a>

```csharp
public string[] RootRotationStatementsInput { get; }
```

- *Type:* string[]

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.usernameTemplateInput"></a>

```csharp
public string UsernameTemplateInput { get; }
```

- *Type:* string

---

##### `VerifyConnectionInput`<sup>Optional</sup> <a name="VerifyConnectionInput" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.verifyConnectionInput"></a>

```csharp
public object VerifyConnectionInput { get; }
```

- *Type:* object

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; }
```

- *Type:* string[]

---

##### `ConnectionUrl`<sup>Required</sup> <a name="ConnectionUrl" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.connectionUrl"></a>

```csharp
public string ConnectionUrl { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.data"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Data { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaxConnectionLifetime`<sup>Required</sup> <a name="MaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.maxConnectionLifetime"></a>

```csharp
public double MaxConnectionLifetime { get; }
```

- *Type:* double

---

##### `MaxIdleConnections`<sup>Required</sup> <a name="MaxIdleConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.maxIdleConnections"></a>

```csharp
public double MaxIdleConnections { get; }
```

- *Type:* double

---

##### `MaxOpenConnections`<sup>Required</sup> <a name="MaxOpenConnections" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.maxOpenConnections"></a>

```csharp
public double MaxOpenConnections { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.pluginName"></a>

```csharp
public string PluginName { get; }
```

- *Type:* string

---

##### `RootRotationStatements`<sup>Required</sup> <a name="RootRotationStatements" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.rootRotationStatements"></a>

```csharp
public string[] RootRotationStatements { get; }
```

- *Type:* string[]

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.usernameTemplate"></a>

```csharp
public string UsernameTemplate { get; }
```

- *Type:* string

---

##### `VerifyConnection`<sup>Required</sup> <a name="VerifyConnection" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.verifyConnection"></a>

```csharp
public object VerifyConnection { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.databaseSecretsMount.DatabaseSecretsMountSnowflakeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



