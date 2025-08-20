/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_est
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PkiSecretBackendConfigEstConfig extends cdktf.TerraformMetaArguments {
  /**
  * Fields parsed from the CSR that appear in the audit and can be used by sentinel policies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_est#audit_fields PkiSecretBackendConfigEst#audit_fields}
  */
  readonly auditFields?: string[];
  /**
  * The PKI secret backend the resource belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_est#backend PkiSecretBackendConfigEst#backend}
  */
  readonly backend: string;
  /**
  * If set, this mount will register the default `.well-known/est` URL path. Only a single mount can enable this across a Vault cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_est#default_mount PkiSecretBackendConfigEst#default_mount}
  */
  readonly defaultMount?: boolean | cdktf.IResolvable;
  /**
  * Required to be set if default_mount is enabled. Specifies the behavior for requests using the default EST label. Can be sign-verbatim or a role given by role:<role_name>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_est#default_path_policy PkiSecretBackendConfigEst#default_path_policy}
  */
  readonly defaultPathPolicy?: string;
  /**
  * If set, parse out fields from the provided CSR making them available for Sentinel policies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_est#enable_sentinel_parsing PkiSecretBackendConfigEst#enable_sentinel_parsing}
  */
  readonly enableSentinelParsing?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether EST is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_est#enabled PkiSecretBackendConfigEst#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_est#id PkiSecretBackendConfigEst#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Configures a pairing of an EST label with the redirected behavior for requests hitting that role. The path policy can be sign-verbatim or a role given by role:<role_name>. Labels must be unique across Vault cluster, and will register .well-known/est/<label> URL paths
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_est#label_to_path_policy PkiSecretBackendConfigEst#label_to_path_policy}
  */
  readonly labelToPathPolicy?: { [key: string]: string };
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_est#namespace PkiSecretBackendConfigEst#namespace}
  */
  readonly namespace?: string;
  /**
  * authenticators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_est#authenticators PkiSecretBackendConfigEst#authenticators}
  */
  readonly authenticators?: PkiSecretBackendConfigEstAuthenticators;
}
export interface PkiSecretBackendConfigEstAuthenticators {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_est#cert PkiSecretBackendConfigEst#cert}
  */
  readonly cert?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_est#userpass PkiSecretBackendConfigEst#userpass}
  */
  readonly userpass?: { [key: string]: string };
}

export function pkiSecretBackendConfigEstAuthenticatorsToTerraform(struct?: PkiSecretBackendConfigEstAuthenticatorsOutputReference | PkiSecretBackendConfigEstAuthenticators): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cert),
    userpass: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.userpass),
  }
}


export function pkiSecretBackendConfigEstAuthenticatorsToHclTerraform(struct?: PkiSecretBackendConfigEstAuthenticatorsOutputReference | PkiSecretBackendConfigEstAuthenticators): any {
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
    userpass: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.userpass),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PkiSecretBackendConfigEstAuthenticatorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PkiSecretBackendConfigEstAuthenticators | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._userpass !== undefined) {
      hasAnyValues = true;
      internalValueResult.userpass = this._userpass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PkiSecretBackendConfigEstAuthenticators | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cert = undefined;
      this._userpass = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cert = value.cert;
      this._userpass = value.userpass;
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

  // userpass - computed: false, optional: true, required: false
  private _userpass?: { [key: string]: string }; 
  public get userpass() {
    return this.getStringMapAttribute('userpass');
  }
  public set userpass(value: { [key: string]: string }) {
    this._userpass = value;
  }
  public resetUserpass() {
    this._userpass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userpassInput() {
    return this._userpass;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_est vault_pki_secret_backend_config_est}
*/
export class PkiSecretBackendConfigEst extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_pki_secret_backend_config_est";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PkiSecretBackendConfigEst resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PkiSecretBackendConfigEst to import
  * @param importFromId The id of the existing PkiSecretBackendConfigEst that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_est#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PkiSecretBackendConfigEst to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_pki_secret_backend_config_est", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_est vault_pki_secret_backend_config_est} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PkiSecretBackendConfigEstConfig
  */
  public constructor(scope: Construct, id: string, config: PkiSecretBackendConfigEstConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_pki_secret_backend_config_est',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.2.1',
        providerVersionConstraint: '~> 5.0'
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
    this._defaultMount = config.defaultMount;
    this._defaultPathPolicy = config.defaultPathPolicy;
    this._enableSentinelParsing = config.enableSentinelParsing;
    this._enabled = config.enabled;
    this._id = config.id;
    this._labelToPathPolicy = config.labelToPathPolicy;
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

  // default_mount - computed: false, optional: true, required: false
  private _defaultMount?: boolean | cdktf.IResolvable; 
  public get defaultMount() {
    return this.getBooleanAttribute('default_mount');
  }
  public set defaultMount(value: boolean | cdktf.IResolvable) {
    this._defaultMount = value;
  }
  public resetDefaultMount() {
    this._defaultMount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMountInput() {
    return this._defaultMount;
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

  // label_to_path_policy - computed: false, optional: true, required: false
  private _labelToPathPolicy?: { [key: string]: string }; 
  public get labelToPathPolicy() {
    return this.getStringMapAttribute('label_to_path_policy');
  }
  public set labelToPathPolicy(value: { [key: string]: string }) {
    this._labelToPathPolicy = value;
  }
  public resetLabelToPathPolicy() {
    this._labelToPathPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelToPathPolicyInput() {
    return this._labelToPathPolicy;
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
  private _authenticators = new PkiSecretBackendConfigEstAuthenticatorsOutputReference(this, "authenticators");
  public get authenticators() {
    return this._authenticators;
  }
  public putAuthenticators(value: PkiSecretBackendConfigEstAuthenticators) {
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
      default_mount: cdktf.booleanToTerraform(this._defaultMount),
      default_path_policy: cdktf.stringToTerraform(this._defaultPathPolicy),
      enable_sentinel_parsing: cdktf.booleanToTerraform(this._enableSentinelParsing),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      label_to_path_policy: cdktf.hashMapper(cdktf.stringToTerraform)(this._labelToPathPolicy),
      namespace: cdktf.stringToTerraform(this._namespace),
      authenticators: pkiSecretBackendConfigEstAuthenticatorsToTerraform(this._authenticators.internalValue),
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
      default_mount: {
        value: cdktf.booleanToHclTerraform(this._defaultMount),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_path_policy: {
        value: cdktf.stringToHclTerraform(this._defaultPathPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      label_to_path_policy: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labelToPathPolicy),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authenticators: {
        value: pkiSecretBackendConfigEstAuthenticatorsToHclTerraform(this._authenticators.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PkiSecretBackendConfigEstAuthenticatorsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
