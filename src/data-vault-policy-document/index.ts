// https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/data-sources/policy_document
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVaultPolicyDocumentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/data-sources/policy_document#id DataVaultPolicyDocument#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/data-sources/policy_document#namespace DataVaultPolicyDocument#namespace}
  */
  readonly namespace?: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/data-sources/policy_document#rule DataVaultPolicyDocument#rule}
  */
  readonly rule?: DataVaultPolicyDocumentRule[] | cdktf.IResolvable;
}
export interface DataVaultPolicyDocumentRuleAllowedParameter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/data-sources/policy_document#key DataVaultPolicyDocument#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/data-sources/policy_document#value DataVaultPolicyDocument#value}
  */
  readonly value: string[];
}

export function dataVaultPolicyDocumentRuleAllowedParameterToTerraform(struct?: DataVaultPolicyDocumentRuleAllowedParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}

export class DataVaultPolicyDocumentRuleAllowedParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataVaultPolicyDocumentRuleAllowedParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVaultPolicyDocumentRuleAllowedParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataVaultPolicyDocumentRuleAllowedParameterList extends cdktf.ComplexList {
  public internalValue? : DataVaultPolicyDocumentRuleAllowedParameter[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataVaultPolicyDocumentRuleAllowedParameterOutputReference {
    return new DataVaultPolicyDocumentRuleAllowedParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVaultPolicyDocumentRuleDeniedParameter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/data-sources/policy_document#key DataVaultPolicyDocument#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/data-sources/policy_document#value DataVaultPolicyDocument#value}
  */
  readonly value: string[];
}

export function dataVaultPolicyDocumentRuleDeniedParameterToTerraform(struct?: DataVaultPolicyDocumentRuleDeniedParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}

export class DataVaultPolicyDocumentRuleDeniedParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataVaultPolicyDocumentRuleDeniedParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVaultPolicyDocumentRuleDeniedParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataVaultPolicyDocumentRuleDeniedParameterList extends cdktf.ComplexList {
  public internalValue? : DataVaultPolicyDocumentRuleDeniedParameter[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataVaultPolicyDocumentRuleDeniedParameterOutputReference {
    return new DataVaultPolicyDocumentRuleDeniedParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVaultPolicyDocumentRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/data-sources/policy_document#capabilities DataVaultPolicyDocument#capabilities}
  */
  readonly capabilities: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/data-sources/policy_document#description DataVaultPolicyDocument#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/data-sources/policy_document#max_wrapping_ttl DataVaultPolicyDocument#max_wrapping_ttl}
  */
  readonly maxWrappingTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/data-sources/policy_document#min_wrapping_ttl DataVaultPolicyDocument#min_wrapping_ttl}
  */
  readonly minWrappingTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/data-sources/policy_document#path DataVaultPolicyDocument#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/data-sources/policy_document#required_parameters DataVaultPolicyDocument#required_parameters}
  */
  readonly requiredParameters?: string[];
  /**
  * allowed_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/data-sources/policy_document#allowed_parameter DataVaultPolicyDocument#allowed_parameter}
  */
  readonly allowedParameter?: DataVaultPolicyDocumentRuleAllowedParameter[] | cdktf.IResolvable;
  /**
  * denied_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/data-sources/policy_document#denied_parameter DataVaultPolicyDocument#denied_parameter}
  */
  readonly deniedParameter?: DataVaultPolicyDocumentRuleDeniedParameter[] | cdktf.IResolvable;
}

export function dataVaultPolicyDocumentRuleToTerraform(struct?: DataVaultPolicyDocumentRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.capabilities),
    description: cdktf.stringToTerraform(struct!.description),
    max_wrapping_ttl: cdktf.stringToTerraform(struct!.maxWrappingTtl),
    min_wrapping_ttl: cdktf.stringToTerraform(struct!.minWrappingTtl),
    path: cdktf.stringToTerraform(struct!.path),
    required_parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requiredParameters),
    allowed_parameter: cdktf.listMapper(dataVaultPolicyDocumentRuleAllowedParameterToTerraform, true)(struct!.allowedParameter),
    denied_parameter: cdktf.listMapper(dataVaultPolicyDocumentRuleDeniedParameterToTerraform, true)(struct!.deniedParameter),
  }
}

export class DataVaultPolicyDocumentRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataVaultPolicyDocumentRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._maxWrappingTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWrappingTtl = this._maxWrappingTtl;
    }
    if (this._minWrappingTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.minWrappingTtl = this._minWrappingTtl;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._requiredParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredParameters = this._requiredParameters;
    }
    if (this._allowedParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedParameter = this._allowedParameter?.internalValue;
    }
    if (this._deniedParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deniedParameter = this._deniedParameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVaultPolicyDocumentRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capabilities = undefined;
      this._description = undefined;
      this._maxWrappingTtl = undefined;
      this._minWrappingTtl = undefined;
      this._path = undefined;
      this._requiredParameters = undefined;
      this._allowedParameter.internalValue = undefined;
      this._deniedParameter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capabilities = value.capabilities;
      this._description = value.description;
      this._maxWrappingTtl = value.maxWrappingTtl;
      this._minWrappingTtl = value.minWrappingTtl;
      this._path = value.path;
      this._requiredParameters = value.requiredParameters;
      this._allowedParameter.internalValue = value.allowedParameter;
      this._deniedParameter.internalValue = value.deniedParameter;
    }
  }

  // capabilities - computed: false, optional: false, required: true
  private _capabilities?: string[]; 
  public get capabilities() {
    return this.getListAttribute('capabilities');
  }
  public set capabilities(value: string[]) {
    this._capabilities = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // max_wrapping_ttl - computed: false, optional: true, required: false
  private _maxWrappingTtl?: string; 
  public get maxWrappingTtl() {
    return this.getStringAttribute('max_wrapping_ttl');
  }
  public set maxWrappingTtl(value: string) {
    this._maxWrappingTtl = value;
  }
  public resetMaxWrappingTtl() {
    this._maxWrappingTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWrappingTtlInput() {
    return this._maxWrappingTtl;
  }

  // min_wrapping_ttl - computed: false, optional: true, required: false
  private _minWrappingTtl?: string; 
  public get minWrappingTtl() {
    return this.getStringAttribute('min_wrapping_ttl');
  }
  public set minWrappingTtl(value: string) {
    this._minWrappingTtl = value;
  }
  public resetMinWrappingTtl() {
    this._minWrappingTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minWrappingTtlInput() {
    return this._minWrappingTtl;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // required_parameters - computed: false, optional: true, required: false
  private _requiredParameters?: string[]; 
  public get requiredParameters() {
    return this.getListAttribute('required_parameters');
  }
  public set requiredParameters(value: string[]) {
    this._requiredParameters = value;
  }
  public resetRequiredParameters() {
    this._requiredParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredParametersInput() {
    return this._requiredParameters;
  }

  // allowed_parameter - computed: false, optional: true, required: false
  private _allowedParameter = new DataVaultPolicyDocumentRuleAllowedParameterList(this, "allowed_parameter", false);
  public get allowedParameter() {
    return this._allowedParameter;
  }
  public putAllowedParameter(value: DataVaultPolicyDocumentRuleAllowedParameter[] | cdktf.IResolvable) {
    this._allowedParameter.internalValue = value;
  }
  public resetAllowedParameter() {
    this._allowedParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedParameterInput() {
    return this._allowedParameter.internalValue;
  }

  // denied_parameter - computed: false, optional: true, required: false
  private _deniedParameter = new DataVaultPolicyDocumentRuleDeniedParameterList(this, "denied_parameter", false);
  public get deniedParameter() {
    return this._deniedParameter;
  }
  public putDeniedParameter(value: DataVaultPolicyDocumentRuleDeniedParameter[] | cdktf.IResolvable) {
    this._deniedParameter.internalValue = value;
  }
  public resetDeniedParameter() {
    this._deniedParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedParameterInput() {
    return this._deniedParameter.internalValue;
  }
}

export class DataVaultPolicyDocumentRuleList extends cdktf.ComplexList {
  public internalValue? : DataVaultPolicyDocumentRule[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataVaultPolicyDocumentRuleOutputReference {
    return new DataVaultPolicyDocumentRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/data-sources/policy_document vault_policy_document}
*/
export class DataVaultPolicyDocument extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_policy_document";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/data-sources/policy_document vault_policy_document} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVaultPolicyDocumentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVaultPolicyDocumentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vault_policy_document',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.19.0',
        providerVersionConstraint: '~> 3.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._namespace = config.namespace;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hcl - computed: true, optional: false, required: false
  public get hcl() {
    return this.getStringAttribute('hcl');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new DataVaultPolicyDocumentRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: DataVaultPolicyDocumentRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      rule: cdktf.listMapper(dataVaultPolicyDocumentRuleToTerraform, true)(this._rule.internalValue),
    };
  }
}
