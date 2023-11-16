# `vault_transform_alphabet`

Refer to the Terraform Registory for docs: [`vault_transform_alphabet`](https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/transform_alphabet).

# `transformAlphabet` Submodule <a name="`transformAlphabet` Submodule" id="@cdktf/provider-vault.transformAlphabet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransformAlphabet <a name="TransformAlphabet" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/transform_alphabet vault_transform_alphabet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.transform_alphabet.TransformAlphabet;

TransformAlphabet.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .path(java.lang.String)
//  .alphabet(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the alphabet. |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws". |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.Initializer.parameter.alphabet">alphabet</a></code> | <code>java.lang.String</code> | A string of characters that contains the alphabet set. |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/transform_alphabet#id TransformAlphabet#id}. |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the alphabet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/transform_alphabet#name TransformAlphabet#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.Initializer.parameter.path"></a>

- *Type:* java.lang.String

The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/transform_alphabet#path TransformAlphabet#path}

---

##### `alphabet`<sup>Optional</sup> <a name="alphabet" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.Initializer.parameter.alphabet"></a>

- *Type:* java.lang.String

A string of characters that contains the alphabet set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/transform_alphabet#alphabet TransformAlphabet#alphabet}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/transform_alphabet#id TransformAlphabet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/transform_alphabet#namespace TransformAlphabet#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.resetAlphabet">resetAlphabet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetAlphabet` <a name="resetAlphabet" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.resetAlphabet"></a>

```java
public void resetAlphabet()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.resetNamespace"></a>

```java
public void resetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TransformAlphabet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.transform_alphabet.TransformAlphabet;

TransformAlphabet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.transform_alphabet.TransformAlphabet;

TransformAlphabet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.transform_alphabet.TransformAlphabet;

TransformAlphabet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.transform_alphabet.TransformAlphabet;

TransformAlphabet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TransformAlphabet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a TransformAlphabet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TransformAlphabet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TransformAlphabet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/transform_alphabet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the TransformAlphabet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.alphabetInput">alphabetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.alphabet">alphabet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alphabetInput`<sup>Optional</sup> <a name="alphabetInput" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.alphabetInput"></a>

```java
public java.lang.String getAlphabetInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `alphabet`<sup>Required</sup> <a name="alphabet" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.alphabet"></a>

```java
public java.lang.String getAlphabet();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TransformAlphabetConfig <a name="TransformAlphabetConfig" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.transform_alphabet.TransformAlphabetConfig;

TransformAlphabetConfig.builder()
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
    .name(java.lang.String)
    .path(java.lang.String)
//  .alphabet(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabetConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the alphabet. |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabetConfig.property.path">path</a></code> | <code>java.lang.String</code> | The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws". |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabetConfig.property.alphabet">alphabet</a></code> | <code>java.lang.String</code> | A string of characters that contains the alphabet set. |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/transform_alphabet#id TransformAlphabet#id}. |
| <code><a href="#@cdktf/provider-vault.transformAlphabet.TransformAlphabetConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the alphabet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/transform_alphabet#name TransformAlphabet#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabetConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/transform_alphabet#path TransformAlphabet#path}

---

##### `alphabet`<sup>Optional</sup> <a name="alphabet" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabetConfig.property.alphabet"></a>

```java
public java.lang.String getAlphabet();
```

- *Type:* java.lang.String

A string of characters that contains the alphabet set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/transform_alphabet#alphabet TransformAlphabet#alphabet}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/transform_alphabet#id TransformAlphabet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.transformAlphabet.TransformAlphabetConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/transform_alphabet#namespace TransformAlphabet#namespace}

---



