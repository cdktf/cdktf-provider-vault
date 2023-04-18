# `vault_transform_transformation`

Refer to the Terraform Registory for docs: [`vault_transform_transformation`](https://www.terraform.io/docs/providers/vault/r/transform_transformation).

# `transformTransformation` Submodule <a name="`transformTransformation` Submodule" id="@cdktf/provider-vault.transformTransformation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransformTransformation <a name="TransformTransformation" id="@cdktf/provider-vault.transformTransformation.TransformTransformation"></a>

Represents a {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation vault_transform_transformation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.transform_transformation.TransformTransformation;

TransformTransformation.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .path(java.lang.String)
//  .allowedRoles(java.util.List<java.lang.String>)
//  .deletionAllowed(java.lang.Boolean)
//  .deletionAllowed(IResolvable)
//  .id(java.lang.String)
//  .maskingCharacter(java.lang.String)
//  .namespace(java.lang.String)
//  .template(java.lang.String)
//  .templates(java.util.List<java.lang.String>)
//  .tweakSource(java.lang.String)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the transformation. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws". |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.allowedRoles">allowedRoles</a></code> | <code>java.util.List<java.lang.String></code> | The set of roles allowed to perform this transformation. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.deletionAllowed">deletionAllowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, this transform can be deleted. Otherwise deletion is blocked while this value remains false. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#id TransformTransformation#id}. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.maskingCharacter">maskingCharacter</a></code> | <code>java.lang.String</code> | The character used to replace data when in masking mode. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.template">template</a></code> | <code>java.lang.String</code> | The name of the template to use. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.templates">templates</a></code> | <code>java.util.List<java.lang.String></code> | Templates configured for transformation. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.tweakSource">tweakSource</a></code> | <code>java.lang.String</code> | The source of where the tweak value comes from. Only valid when in FPE mode. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of transformation to perform. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the transformation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#name TransformTransformation#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.path"></a>

- *Type:* java.lang.String

The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#path TransformTransformation#path}

---

##### `allowedRoles`<sup>Optional</sup> <a name="allowedRoles" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.allowedRoles"></a>

- *Type:* java.util.List<java.lang.String>

The set of roles allowed to perform this transformation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#allowed_roles TransformTransformation#allowed_roles}

---

##### `deletionAllowed`<sup>Optional</sup> <a name="deletionAllowed" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.deletionAllowed"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, this transform can be deleted. Otherwise deletion is blocked while this value remains false.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#deletion_allowed TransformTransformation#deletion_allowed}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#id TransformTransformation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maskingCharacter`<sup>Optional</sup> <a name="maskingCharacter" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.maskingCharacter"></a>

- *Type:* java.lang.String

The character used to replace data when in masking mode.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#masking_character TransformTransformation#masking_character}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#namespace TransformTransformation#namespace}

---

##### `template`<sup>Optional</sup> <a name="template" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.template"></a>

- *Type:* java.lang.String

The name of the template to use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#template TransformTransformation#template}

---

##### `templates`<sup>Optional</sup> <a name="templates" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.templates"></a>

- *Type:* java.util.List<java.lang.String>

Templates configured for transformation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#templates TransformTransformation#templates}

---

##### `tweakSource`<sup>Optional</sup> <a name="tweakSource" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.tweakSource"></a>

- *Type:* java.lang.String

The source of where the tweak value comes from. Only valid when in FPE mode.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#tweak_source TransformTransformation#tweak_source}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of transformation to perform.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#type TransformTransformation#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetAllowedRoles">resetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetDeletionAllowed">resetDeletionAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetMaskingCharacter">resetMaskingCharacter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetTemplate">resetTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetTemplates">resetTemplates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetTweakSource">resetTweakSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAllowedRoles` <a name="resetAllowedRoles" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetAllowedRoles"></a>

```java
public void resetAllowedRoles()
```

##### `resetDeletionAllowed` <a name="resetDeletionAllowed" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetDeletionAllowed"></a>

```java
public void resetDeletionAllowed()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetId"></a>

```java
public void resetId()
```

##### `resetMaskingCharacter` <a name="resetMaskingCharacter" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetMaskingCharacter"></a>

```java
public void resetMaskingCharacter()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetTemplate` <a name="resetTemplate" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetTemplate"></a>

```java
public void resetTemplate()
```

##### `resetTemplates` <a name="resetTemplates" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetTemplates"></a>

```java
public void resetTemplates()
```

##### `resetTweakSource` <a name="resetTweakSource" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetTweakSource"></a>

```java
public void resetTweakSource()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.transform_transformation.TransformTransformation;

TransformTransformation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.transform_transformation.TransformTransformation;

TransformTransformation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.transform_transformation.TransformTransformation;

TransformTransformation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.allowedRolesInput">allowedRolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.deletionAllowedInput">deletionAllowedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.maskingCharacterInput">maskingCharacterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.templateInput">templateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.templatesInput">templatesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.tweakSourceInput">tweakSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.allowedRoles">allowedRoles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.deletionAllowed">deletionAllowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.maskingCharacter">maskingCharacter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.template">template</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.templates">templates</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.tweakSource">tweakSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allowedRolesInput`<sup>Optional</sup> <a name="allowedRolesInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.allowedRolesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedRolesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deletionAllowedInput`<sup>Optional</sup> <a name="deletionAllowedInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.deletionAllowedInput"></a>

```java
public java.lang.Object getDeletionAllowedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maskingCharacterInput`<sup>Optional</sup> <a name="maskingCharacterInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.maskingCharacterInput"></a>

```java
public java.lang.String getMaskingCharacterInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `templateInput`<sup>Optional</sup> <a name="templateInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.templateInput"></a>

```java
public java.lang.String getTemplateInput();
```

- *Type:* java.lang.String

---

##### `templatesInput`<sup>Optional</sup> <a name="templatesInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.templatesInput"></a>

```java
public java.util.List<java.lang.String> getTemplatesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tweakSourceInput`<sup>Optional</sup> <a name="tweakSourceInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.tweakSourceInput"></a>

```java
public java.lang.String getTweakSourceInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `allowedRoles`<sup>Required</sup> <a name="allowedRoles" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.allowedRoles"></a>

```java
public java.util.List<java.lang.String> getAllowedRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deletionAllowed`<sup>Required</sup> <a name="deletionAllowed" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.deletionAllowed"></a>

```java
public java.lang.Object getDeletionAllowed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maskingCharacter`<sup>Required</sup> <a name="maskingCharacter" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.maskingCharacter"></a>

```java
public java.lang.String getMaskingCharacter();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.template"></a>

```java
public java.lang.String getTemplate();
```

- *Type:* java.lang.String

---

##### `templates`<sup>Required</sup> <a name="templates" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.templates"></a>

```java
public java.util.List<java.lang.String> getTemplates();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tweakSource`<sup>Required</sup> <a name="tweakSource" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.tweakSource"></a>

```java
public java.lang.String getTweakSource();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TransformTransformationConfig <a name="TransformTransformationConfig" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.transform_transformation.TransformTransformationConfig;

TransformTransformationConfig.builder()
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
    .name(java.lang.String)
    .path(java.lang.String)
//  .allowedRoles(java.util.List<java.lang.String>)
//  .deletionAllowed(java.lang.Boolean)
//  .deletionAllowed(IResolvable)
//  .id(java.lang.String)
//  .maskingCharacter(java.lang.String)
//  .namespace(java.lang.String)
//  .template(java.lang.String)
//  .templates(java.util.List<java.lang.String>)
//  .tweakSource(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the transformation. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.path">path</a></code> | <code>java.lang.String</code> | The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws". |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.allowedRoles">allowedRoles</a></code> | <code>java.util.List<java.lang.String></code> | The set of roles allowed to perform this transformation. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.deletionAllowed">deletionAllowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, this transform can be deleted. Otherwise deletion is blocked while this value remains false. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#id TransformTransformation#id}. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.maskingCharacter">maskingCharacter</a></code> | <code>java.lang.String</code> | The character used to replace data when in masking mode. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.template">template</a></code> | <code>java.lang.String</code> | The name of the template to use. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.templates">templates</a></code> | <code>java.util.List<java.lang.String></code> | Templates configured for transformation. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.tweakSource">tweakSource</a></code> | <code>java.lang.String</code> | The source of where the tweak value comes from. Only valid when in FPE mode. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of transformation to perform. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the transformation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#name TransformTransformation#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#path TransformTransformation#path}

---

##### `allowedRoles`<sup>Optional</sup> <a name="allowedRoles" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.allowedRoles"></a>

```java
public java.util.List<java.lang.String> getAllowedRoles();
```

- *Type:* java.util.List<java.lang.String>

The set of roles allowed to perform this transformation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#allowed_roles TransformTransformation#allowed_roles}

---

##### `deletionAllowed`<sup>Optional</sup> <a name="deletionAllowed" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.deletionAllowed"></a>

```java
public java.lang.Object getDeletionAllowed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, this transform can be deleted. Otherwise deletion is blocked while this value remains false.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#deletion_allowed TransformTransformation#deletion_allowed}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#id TransformTransformation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maskingCharacter`<sup>Optional</sup> <a name="maskingCharacter" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.maskingCharacter"></a>

```java
public java.lang.String getMaskingCharacter();
```

- *Type:* java.lang.String

The character used to replace data when in masking mode.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#masking_character TransformTransformation#masking_character}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#namespace TransformTransformation#namespace}

---

##### `template`<sup>Optional</sup> <a name="template" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.template"></a>

```java
public java.lang.String getTemplate();
```

- *Type:* java.lang.String

The name of the template to use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#template TransformTransformation#template}

---

##### `templates`<sup>Optional</sup> <a name="templates" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.templates"></a>

```java
public java.util.List<java.lang.String> getTemplates();
```

- *Type:* java.util.List<java.lang.String>

Templates configured for transformation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#templates TransformTransformation#templates}

---

##### `tweakSource`<sup>Optional</sup> <a name="tweakSource" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.tweakSource"></a>

```java
public java.lang.String getTweakSource();
```

- *Type:* java.lang.String

The source of where the tweak value comes from. Only valid when in FPE mode.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#tweak_source TransformTransformation#tweak_source}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of transformation to perform.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#type TransformTransformation#type}

---



