/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_scep
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PkiSecretBackendConfigScepConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of allowed digest algorithms for SCEP requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_scep#allowed_digest_algorithms PkiSecretBackendConfigScep#allowed_digest_algorithms}
  */
  readonly allowedDigestAlgorithms?: string[];
  /**
  * List of allowed encryption algorithms for SCEP requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_scep#allowed_encryption_algorithms PkiSecretBackendConfigScep#allowed_encryption_algorithms}
  */
  readonly allowedEncryptionAlgorithms?: string[];
  /**
  * The PKI secret backend the resource belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_scep#backend PkiSecretBackendConfigScep#backend}
  */
  readonly backend: string;
  /**
  * Specifies the behavior for requests using the default SCEP label. Can be sign-verbatim or a role given by role:<role_name>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_scep#default_path_policy PkiSecretBackendConfigScep#default_path_policy}
  */
  readonly defaultPathPolicy?: string;
  /**
  * Specifies whether SCEP is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_scep#enabled PkiSecretBackendConfigScep#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_scep#id PkiSecretBackendConfigScep#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The level of logging verbosity, affects only SCEP logs on this mount
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_scep#log_level PkiSecretBackendConfigScep#log_level}
  */
  readonly logLevel?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_scep#namespace PkiSecretBackendConfigScep#namespace}
  */
  readonly namespace?: string;
  /**
  * If true, only return the issuer CA, otherwise the entire CA certificate chain will be returned if available from the PKI mount
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_scep#restrict_ca_chain_to_issuer PkiSecretBackendConfigScep#restrict_ca_chain_to_issuer}
  */
  readonly restrictCaChainToIssuer?: boolean | cdktf.IResolvable;
  /**
  * authenticators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_scep#authenticators PkiSecretBackendConfigScep#authenticators}
  */
  readonly authenticators?: PkiSecretBackendConfigScepAuthenticators;
  /**
  * external_validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_scep#external_validation PkiSecretBackendConfigScep#external_validation}
  */
  readonly externalValidation?: PkiSecretBackendConfigScepExternalValidation[] | cdktf.IResolvable;
}
export interface PkiSecretBackendConfigScepAuthenticators {
  /**
  * The accessor and cert_role properties for cert auth backends
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_scep#cert PkiSecretBackendConfigScep#cert}
  */
  readonly cert?: { [key: string]: string };
  /**
  * The accessor property for SCEP auth backends
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_scep#scep PkiSecretBackendConfigScep#scep}
  */
  readonly scep?: { [key: string]: string };
}

export function pkiSecretBackendConfigScepAuthenticatorsToTerraform(struct?: PkiSecretBackendConfigScepAuthenticatorsOutputReference | PkiSecretBackendConfigScepAuthenticators): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cert),
    scep: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.scep),
  }
}


export function pkiSecretBackendConfigScepAuthenticatorsToHclTerraform(struct?: PkiSecretBackendConfigScepAuthenticatorsOutputReference | PkiSecretBackendConfigScepAuthenticators): any {
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
    scep: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.scep),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PkiSecretBackendConfigScepAuthenticatorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PkiSecretBackendConfigScepAuthenticators | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._scep !== undefined) {
      hasAnyValues = true;
      internalValueResult.scep = this._scep;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PkiSecretBackendConfigScepAuthenticators | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cert = undefined;
      this._scep = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cert = value.cert;
      this._scep = value.scep;
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

  // scep - computed: false, optional: true, required: false
  private _scep?: { [key: string]: string }; 
  public get scep() {
    return this.getStringMapAttribute('scep');
  }
  public set scep(value: { [key: string]: string }) {
    this._scep = value;
  }
  public resetScep() {
    this._scep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scepInput() {
    return this._scep;
  }
}
export interface PkiSecretBackendConfigScepExternalValidation {
  /**
  * The credentials to enable Microsoft Intune validation of SCEP requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_scep#intune PkiSecretBackendConfigScep#intune}
  */
  readonly intune?: { [key: string]: string };
}

export function pkiSecretBackendConfigScepExternalValidationToTerraform(struct?: PkiSecretBackendConfigScepExternalValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    intune: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.intune),
  }
}


export function pkiSecretBackendConfigScepExternalValidationToHclTerraform(struct?: PkiSecretBackendConfigScepExternalValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    intune: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.intune),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PkiSecretBackendConfigScepExternalValidationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PkiSecretBackendConfigScepExternalValidation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intune !== undefined) {
      hasAnyValues = true;
      internalValueResult.intune = this._intune;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PkiSecretBackendConfigScepExternalValidation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._intune = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._intune = value.intune;
    }
  }

  // intune - computed: false, optional: true, required: false
  private _intune?: { [key: string]: string }; 
  public get intune() {
    return this.getStringMapAttribute('intune');
  }
  public set intune(value: { [key: string]: string }) {
    this._intune = value;
  }
  public resetIntune() {
    this._intune = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intuneInput() {
    return this._intune;
  }
}

export class PkiSecretBackendConfigScepExternalValidationList extends cdktf.ComplexList {
  public internalValue? : PkiSecretBackendConfigScepExternalValidation[] | cdktf.IResolvable

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
  public get(index: number): PkiSecretBackendConfigScepExternalValidationOutputReference {
    return new PkiSecretBackendConfigScepExternalValidationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_scep vault_pki_secret_backend_config_scep}
*/
export class PkiSecretBackendConfigScep extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_pki_secret_backend_config_scep";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PkiSecretBackendConfigScep resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PkiSecretBackendConfigScep to import
  * @param importFromId The id of the existing PkiSecretBackendConfigScep that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_scep#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PkiSecretBackendConfigScep to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_pki_secret_backend_config_scep", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_scep vault_pki_secret_backend_config_scep} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PkiSecretBackendConfigScepConfig
  */
  public constructor(scope: Construct, id: string, config: PkiSecretBackendConfigScepConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_pki_secret_backend_config_scep',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.5.0',
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
    this._allowedDigestAlgorithms = config.allowedDigestAlgorithms;
    this._allowedEncryptionAlgorithms = config.allowedEncryptionAlgorithms;
    this._backend = config.backend;
    this._defaultPathPolicy = config.defaultPathPolicy;
    this._enabled = config.enabled;
    this._id = config.id;
    this._logLevel = config.logLevel;
    this._namespace = config.namespace;
    this._restrictCaChainToIssuer = config.restrictCaChainToIssuer;
    this._authenticators.internalValue = config.authenticators;
    this._externalValidation.internalValue = config.externalValidation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_digest_algorithms - computed: true, optional: true, required: false
  private _allowedDigestAlgorithms?: string[]; 
  public get allowedDigestAlgorithms() {
    return this.getListAttribute('allowed_digest_algorithms');
  }
  public set allowedDigestAlgorithms(value: string[]) {
    this._allowedDigestAlgorithms = value;
  }
  public resetAllowedDigestAlgorithms() {
    this._allowedDigestAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDigestAlgorithmsInput() {
    return this._allowedDigestAlgorithms;
  }

  // allowed_encryption_algorithms - computed: true, optional: true, required: false
  private _allowedEncryptionAlgorithms?: string[]; 
  public get allowedEncryptionAlgorithms() {
    return this.getListAttribute('allowed_encryption_algorithms');
  }
  public set allowedEncryptionAlgorithms(value: string[]) {
    this._allowedEncryptionAlgorithms = value;
  }
  public resetAllowedEncryptionAlgorithms() {
    this._allowedEncryptionAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedEncryptionAlgorithmsInput() {
    return this._allowedEncryptionAlgorithms;
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

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
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

  // restrict_ca_chain_to_issuer - computed: false, optional: true, required: false
  private _restrictCaChainToIssuer?: boolean | cdktf.IResolvable; 
  public get restrictCaChainToIssuer() {
    return this.getBooleanAttribute('restrict_ca_chain_to_issuer');
  }
  public set restrictCaChainToIssuer(value: boolean | cdktf.IResolvable) {
    this._restrictCaChainToIssuer = value;
  }
  public resetRestrictCaChainToIssuer() {
    this._restrictCaChainToIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictCaChainToIssuerInput() {
    return this._restrictCaChainToIssuer;
  }

  // authenticators - computed: false, optional: true, required: false
  private _authenticators = new PkiSecretBackendConfigScepAuthenticatorsOutputReference(this, "authenticators");
  public get authenticators() {
    return this._authenticators;
  }
  public putAuthenticators(value: PkiSecretBackendConfigScepAuthenticators) {
    this._authenticators.internalValue = value;
  }
  public resetAuthenticators() {
    this._authenticators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatorsInput() {
    return this._authenticators.internalValue;
  }

  // external_validation - computed: false, optional: true, required: false
  private _externalValidation = new PkiSecretBackendConfigScepExternalValidationList(this, "external_validation", false);
  public get externalValidation() {
    return this._externalValidation;
  }
  public putExternalValidation(value: PkiSecretBackendConfigScepExternalValidation[] | cdktf.IResolvable) {
    this._externalValidation.internalValue = value;
  }
  public resetExternalValidation() {
    this._externalValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalValidationInput() {
    return this._externalValidation.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_digest_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedDigestAlgorithms),
      allowed_encryption_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedEncryptionAlgorithms),
      backend: cdktf.stringToTerraform(this._backend),
      default_path_policy: cdktf.stringToTerraform(this._defaultPathPolicy),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      log_level: cdktf.stringToTerraform(this._logLevel),
      namespace: cdktf.stringToTerraform(this._namespace),
      restrict_ca_chain_to_issuer: cdktf.booleanToTerraform(this._restrictCaChainToIssuer),
      authenticators: pkiSecretBackendConfigScepAuthenticatorsToTerraform(this._authenticators.internalValue),
      external_validation: cdktf.listMapper(pkiSecretBackendConfigScepExternalValidationToTerraform, true)(this._externalValidation.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_digest_algorithms: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedDigestAlgorithms),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      allowed_encryption_algorithms: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedEncryptionAlgorithms),
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
      log_level: {
        value: cdktf.stringToHclTerraform(this._logLevel),
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
      restrict_ca_chain_to_issuer: {
        value: cdktf.booleanToHclTerraform(this._restrictCaChainToIssuer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authenticators: {
        value: pkiSecretBackendConfigScepAuthenticatorsToHclTerraform(this._authenticators.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PkiSecretBackendConfigScepAuthenticatorsList",
      },
      external_validation: {
        value: cdktf.listMapperHcl(pkiSecretBackendConfigScepExternalValidationToHclTerraform, true)(this._externalValidation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PkiSecretBackendConfigScepExternalValidationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
