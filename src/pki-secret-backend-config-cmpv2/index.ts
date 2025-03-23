/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_cmpv2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PkiSecretBackendConfigCmpv2Config extends cdktf.TerraformMetaArguments {
  /**
  * Fields parsed from the CSR that appear in the audit and can be used by sentinel policies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_cmpv2#audit_fields PkiSecretBackendConfigCmpv2#audit_fields}
  */
  readonly auditFields?: string[];
  /**
  * The PKI secret backend the resource belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_cmpv2#backend PkiSecretBackendConfigCmpv2#backend}
  */
  readonly backend: string;
  /**
  * Can be sign-verbatim or a role given by role:<role_name>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_cmpv2#default_path_policy PkiSecretBackendConfigCmpv2#default_path_policy}
  */
  readonly defaultPathPolicy?: string;
  /**
  * A comma-separated list of validations not to perform on CMPv2 messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_cmpv2#disabled_validations PkiSecretBackendConfigCmpv2#disabled_validations}
  */
  readonly disabledValidations?: string[];
  /**
  * If set, parse out fields from the provided CSR making them available for Sentinel policies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_cmpv2#enable_sentinel_parsing PkiSecretBackendConfigCmpv2#enable_sentinel_parsing}
  */
  readonly enableSentinelParsing?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether CMPv2 is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_cmpv2#enabled PkiSecretBackendConfigCmpv2#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_cmpv2#id PkiSecretBackendConfigCmpv2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_cmpv2#namespace PkiSecretBackendConfigCmpv2#namespace}
  */
  readonly namespace?: string;
  /**
  * authenticators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_cmpv2#authenticators PkiSecretBackendConfigCmpv2#authenticators}
  */
  readonly authenticators?: PkiSecretBackendConfigCmpv2Authenticators;
}
export interface PkiSecretBackendConfigCmpv2Authenticators {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_cmpv2#cert PkiSecretBackendConfigCmpv2#cert}
  */
  readonly cert?: { [key: string]: string };
}

export function pkiSecretBackendConfigCmpv2AuthenticatorsToTerraform(struct?: PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference | PkiSecretBackendConfigCmpv2Authenticators): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cert),
  }
}


export function pkiSecretBackendConfigCmpv2AuthenticatorsToHclTerraform(struct?: PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference | PkiSecretBackendConfigCmpv2Authenticators): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.cert),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PkiSecretBackendConfigCmpv2Authenticators | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PkiSecretBackendConfigCmpv2Authenticators | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cert = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cert = value.cert;
    }
  }

  // cert - computed: false, optional: true, required: false
  private _cert?: { [key: string]: string }; 
  public get cert() {
    return this.getStringMapAttribute('cert');
  }
  public set cert(value: { [key: string]: string }) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_cmpv2 vault_pki_secret_backend_config_cmpv2}
*/
export class PkiSecretBackendConfigCmpv2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_pki_secret_backend_config_cmpv2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PkiSecretBackendConfigCmpv2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PkiSecretBackendConfigCmpv2 to import
  * @param importFromId The id of the existing PkiSecretBackendConfigCmpv2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_cmpv2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PkiSecretBackendConfigCmpv2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_pki_secret_backend_config_cmpv2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_cmpv2 vault_pki_secret_backend_config_cmpv2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PkiSecretBackendConfigCmpv2Config
  */
  public constructor(scope: Construct, id: string, config: PkiSecretBackendConfigCmpv2Config) {
    super(scope, id, {
      terraformResourceType: 'vault_pki_secret_backend_config_cmpv2',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '4.7.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._auditFields = config.auditFields;
    this._backend = config.backend;
    this._defaultPathPolicy = config.defaultPathPolicy;
    this._disabledValidations = config.disabledValidations;
    this._enableSentinelParsing = config.enableSentinelParsing;
    this._enabled = config.enabled;
    this._id = config.id;
    this._namespace = config.namespace;
    this._authenticators.internalValue = config.authenticators;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_fields - computed: true, optional: true, required: false
  private _auditFields?: string[]; 
  public get auditFields() {
    return this.getListAttribute('audit_fields');
  }
  public set auditFields(value: string[]) {
    this._auditFields = value;
  }
  public resetAuditFields() {
    this._auditFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditFieldsInput() {
    return this._auditFields;
  }

  // backend - computed: false, optional: false, required: true
  private _backend?: string; 
  public get backend() {
    return this.getStringAttribute('backend');
  }
  public set backend(value: string) {
    this._backend = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend;
  }

  // default_path_policy - computed: false, optional: true, required: false
  private _defaultPathPolicy?: string; 
  public get defaultPathPolicy() {
    return this.getStringAttribute('default_path_policy');
  }
  public set defaultPathPolicy(value: string) {
    this._defaultPathPolicy = value;
  }
  public resetDefaultPathPolicy() {
    this._defaultPathPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPathPolicyInput() {
    return this._defaultPathPolicy;
  }

  // disabled_validations - computed: false, optional: true, required: false
  private _disabledValidations?: string[]; 
  public get disabledValidations() {
    return this.getListAttribute('disabled_validations');
  }
  public set disabledValidations(value: string[]) {
    this._disabledValidations = value;
  }
  public resetDisabledValidations() {
    this._disabledValidations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledValidationsInput() {
    return this._disabledValidations;
  }

  // enable_sentinel_parsing - computed: false, optional: true, required: false
  private _enableSentinelParsing?: boolean | cdktf.IResolvable; 
  public get enableSentinelParsing() {
    return this.getBooleanAttribute('enable_sentinel_parsing');
  }
  public set enableSentinelParsing(value: boolean | cdktf.IResolvable) {
    this._enableSentinelParsing = value;
  }
  public resetEnableSentinelParsing() {
    this._enableSentinelParsing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSentinelParsingInput() {
    return this._enableSentinelParsing;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
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

  // authenticators - computed: false, optional: true, required: false
  private _authenticators = new PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference(this, "authenticators");
  public get authenticators() {
    return this._authenticators;
  }
  public putAuthenticators(value: PkiSecretBackendConfigCmpv2Authenticators) {
    this._authenticators.internalValue = value;
  }
  public resetAuthenticators() {
    this._authenticators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatorsInput() {
    return this._authenticators.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audit_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._auditFields),
      backend: cdktf.stringToTerraform(this._backend),
      default_path_policy: cdktf.stringToTerraform(this._defaultPathPolicy),
      disabled_validations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._disabledValidations),
      enable_sentinel_parsing: cdktf.booleanToTerraform(this._enableSentinelParsing),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      authenticators: pkiSecretBackendConfigCmpv2AuthenticatorsToTerraform(this._authenticators.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audit_fields: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._auditFields),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      backend: {
        value: cdktf.stringToHclTerraform(this._backend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_path_policy: {
        value: cdktf.stringToHclTerraform(this._defaultPathPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled_validations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._disabledValidations),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      enable_sentinel_parsing: {
        value: cdktf.booleanToHclTerraform(this._enableSentinelParsing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authenticators: {
        value: pkiSecretBackendConfigCmpv2AuthenticatorsToHclTerraform(this._authenticators.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PkiSecretBackendConfigCmpv2AuthenticatorsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
