# `vault_ldap_secret_backend_library_set`

Refer to the Terraform Registory for docs: [`vault_ldap_secret_backend_library_set`](https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/ldap_secret_backend_library_set).

# `ldapSecretBackendLibrarySet` Submodule <a name="`ldapSecretBackendLibrarySet` Submodule" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LdapSecretBackendLibrarySet <a name="LdapSecretBackendLibrarySet" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/ldap_secret_backend_library_set vault_ldap_secret_backend_library_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new LdapSecretBackendLibrarySet(Construct Scope, string Id, LdapSecretBackendLibrarySetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig">LdapSecretBackendLibrarySetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig">LdapSecretBackendLibrarySetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetDisableCheckInEnforcement">ResetDisableCheckInEnforcement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetMaxTtl">ResetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetMount">ResetMount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDisableCheckInEnforcement` <a name="ResetDisableCheckInEnforcement" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetDisableCheckInEnforcement"></a>

```csharp
private void ResetDisableCheckInEnforcement()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaxTtl` <a name="ResetMaxTtl" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetMaxTtl"></a>

```csharp
private void ResetMaxTtl()
```

##### `ResetMount` <a name="ResetMount" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetMount"></a>

```csharp
private void ResetMount()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetTtl"></a>

```csharp
private void ResetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

LdapSecretBackendLibrarySet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

LdapSecretBackendLibrarySet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

LdapSecretBackendLibrarySet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.disableCheckInEnforcementInput">DisableCheckInEnforcementInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.maxTtlInput">MaxTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.serviceAccountNamesInput">ServiceAccountNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.ttlInput">TtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.disableCheckInEnforcement">DisableCheckInEnforcement</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.maxTtl">MaxTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.serviceAccountNames">ServiceAccountNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DisableCheckInEnforcementInput`<sup>Optional</sup> <a name="DisableCheckInEnforcementInput" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.disableCheckInEnforcementInput"></a>

```csharp
public object DisableCheckInEnforcementInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaxTtlInput`<sup>Optional</sup> <a name="MaxTtlInput" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.maxTtlInput"></a>

```csharp
public double MaxTtlInput { get; }
```

- *Type:* double

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ServiceAccountNamesInput`<sup>Optional</sup> <a name="ServiceAccountNamesInput" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.serviceAccountNamesInput"></a>

```csharp
public string[] ServiceAccountNamesInput { get; }
```

- *Type:* string[]

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.ttlInput"></a>

```csharp
public double TtlInput { get; }
```

- *Type:* double

---

##### `DisableCheckInEnforcement`<sup>Required</sup> <a name="DisableCheckInEnforcement" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.disableCheckInEnforcement"></a>

```csharp
public object DisableCheckInEnforcement { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxTtl`<sup>Required</sup> <a name="MaxTtl" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.maxTtl"></a>

```csharp
public double MaxTtl { get; }
```

- *Type:* double

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `ServiceAccountNames`<sup>Required</sup> <a name="ServiceAccountNames" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.serviceAccountNames"></a>

```csharp
public string[] ServiceAccountNames { get; }
```

- *Type:* string[]

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LdapSecretBackendLibrarySetConfig <a name="LdapSecretBackendLibrarySetConfig" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new LdapSecretBackendLibrarySetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string[] ServiceAccountNames,
    object DisableCheckInEnforcement = null,
    string Id = null,
    double MaxTtl = null,
    string Mount = null,
    string Namespace = null,
    double Ttl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.name">Name</a></code> | <code>string</code> | The name of the set of service accounts. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.serviceAccountNames">ServiceAccountNames</a></code> | <code>string[]</code> | The names of all the service accounts that can be checked out from this set. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.disableCheckInEnforcement">DisableCheckInEnforcement</a></code> | <code>object</code> | Disable enforcing that service accounts must be checked in by the entity or client token that checked them out. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/ldap_secret_backend_library_set#id LdapSecretBackendLibrarySet#id}. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.maxTtl">MaxTtl</a></code> | <code>double</code> | The maximum amount of time a check-out last with renewal before Vault automatically checks it back in. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.mount">Mount</a></code> | <code>string</code> | The path where the LDAP secrets backend is mounted. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.ttl">Ttl</a></code> | <code>double</code> | The maximum amount of time a single check-out lasts before Vault automatically checks it back in. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the set of service accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/ldap_secret_backend_library_set#name LdapSecretBackendLibrarySet#name}

---

##### `ServiceAccountNames`<sup>Required</sup> <a name="ServiceAccountNames" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.serviceAccountNames"></a>

```csharp
public string[] ServiceAccountNames { get; set; }
```

- *Type:* string[]

The names of all the service accounts that can be checked out from this set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/ldap_secret_backend_library_set#service_account_names LdapSecretBackendLibrarySet#service_account_names}

---

##### `DisableCheckInEnforcement`<sup>Optional</sup> <a name="DisableCheckInEnforcement" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.disableCheckInEnforcement"></a>

```csharp
public object DisableCheckInEnforcement { get; set; }
```

- *Type:* object

Disable enforcing that service accounts must be checked in by the entity or client token that checked them out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/ldap_secret_backend_library_set#disable_check_in_enforcement LdapSecretBackendLibrarySet#disable_check_in_enforcement}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/ldap_secret_backend_library_set#id LdapSecretBackendLibrarySet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxTtl`<sup>Optional</sup> <a name="MaxTtl" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.maxTtl"></a>

```csharp
public double MaxTtl { get; set; }
```

- *Type:* double

The maximum amount of time a check-out last with renewal before Vault automatically checks it back in.

Defaults to 24 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/ldap_secret_backend_library_set#max_ttl LdapSecretBackendLibrarySet#max_ttl}

---

##### `Mount`<sup>Optional</sup> <a name="Mount" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

The path where the LDAP secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/ldap_secret_backend_library_set#mount LdapSecretBackendLibrarySet#mount}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/ldap_secret_backend_library_set#namespace LdapSecretBackendLibrarySet#namespace}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.ttl"></a>

```csharp
public double Ttl { get; set; }
```

- *Type:* double

The maximum amount of time a single check-out lasts before Vault automatically checks it back in.

Defaults to 24 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/ldap_secret_backend_library_set#ttl LdapSecretBackendLibrarySet#ttl}

---



