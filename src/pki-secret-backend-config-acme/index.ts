/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PkiSecretBackendConfigAcmeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies whether the ExtKeyUsage field from a role is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme#allow_role_ext_key_usage PkiSecretBackendConfigAcme#allow_role_ext_key_usage}
  */
  readonly allowRoleExtKeyUsage?: boolean | cdktf.IResolvable;
  /**
  * Specifies which issuers are allowed for use with ACME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme#allowed_issuers PkiSecretBackendConfigAcme#allowed_issuers}
  */
  readonly allowedIssuers?: string[];
  /**
  * Specifies which roles are allowed for use with ACME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme#allowed_roles PkiSecretBackendConfigAcme#allowed_roles}
  */
  readonly allowedRoles?: string[];
  /**
  * Full path where PKI backend is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme#backend PkiSecretBackendConfigAcme#backend}
  */
  readonly backend: string;
  /**
  * Specifies the policy to be used for non-role-qualified ACME requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme#default_directory_policy PkiSecretBackendConfigAcme#default_directory_policy}
  */
  readonly defaultDirectoryPolicy?: string;
  /**
  * DNS resolver to use for domain resolution on this mount. Must be in the format <host>:<port>, with both parts mandatory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme#dns_resolver PkiSecretBackendConfigAcme#dns_resolver}
  */
  readonly dnsResolver?: string;
  /**
  * Specifies the policy to use for external account binding behaviour.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme#eab_policy PkiSecretBackendConfigAcme#eab_policy}
  */
  readonly eabPolicy?: string;
  /**
  * Specifies whether ACME is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme#enabled PkiSecretBackendConfigAcme#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme#id PkiSecretBackendConfigAcme#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the maximum TTL in seconds for certificates issued by ACME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme#max_ttl PkiSecretBackendConfigAcme#max_ttl}
  */
  readonly maxTtl?: number;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme#namespace PkiSecretBackendConfigAcme#namespace}
  */
  readonly namespace?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme vault_pki_secret_backend_config_acme}
*/
export class PkiSecretBackendConfigAcme extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_pki_secret_backend_config_acme";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PkiSecretBackendConfigAcme resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PkiSecretBackendConfigAcme to import
  * @param importFromId The id of the existing PkiSecretBackendConfigAcme that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PkiSecretBackendConfigAcme to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_pki_secret_backend_config_acme", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme vault_pki_secret_backend_config_acme} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PkiSecretBackendConfigAcmeConfig
  */
  public constructor(scope: Construct, id: string, config: PkiSecretBackendConfigAcmeConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_pki_secret_backend_config_acme',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.0.0',
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
    this._allowRoleExtKeyUsage = config.allowRoleExtKeyUsage;
    this._allowedIssuers = config.allowedIssuers;
    this._allowedRoles = config.allowedRoles;
    this._backend = config.backend;
    this._defaultDirectoryPolicy = config.defaultDirectoryPolicy;
    this._dnsResolver = config.dnsResolver;
    this._eabPolicy = config.eabPolicy;
    this._enabled = config.enabled;
    this._id = config.id;
    this._maxTtl = config.maxTtl;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_role_ext_key_usage - computed: false, optional: true, required: false
  private _allowRoleExtKeyUsage?: boolean | cdktf.IResolvable; 
  public get allowRoleExtKeyUsage() {
    return this.getBooleanAttribute('allow_role_ext_key_usage');
  }
  public set allowRoleExtKeyUsage(value: boolean | cdktf.IResolvable) {
    this._allowRoleExtKeyUsage = value;
  }
  public resetAllowRoleExtKeyUsage() {
    this._allowRoleExtKeyUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRoleExtKeyUsageInput() {
    return this._allowRoleExtKeyUsage;
  }

  // allowed_issuers - computed: true, optional: true, required: false
  private _allowedIssuers?: string[]; 
  public get allowedIssuers() {
    return this.getListAttribute('allowed_issuers');
  }
  public set allowedIssuers(value: string[]) {
    this._allowedIssuers = value;
  }
  public resetAllowedIssuers() {
    this._allowedIssuers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIssuersInput() {
    return this._allowedIssuers;
  }

  // allowed_roles - computed: true, optional: true, required: false
  private _allowedRoles?: string[]; 
  public get allowedRoles() {
    return this.getListAttribute('allowed_roles');
  }
  public set allowedRoles(value: string[]) {
    this._allowedRoles = value;
  }
  public resetAllowedRoles() {
    this._allowedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRolesInput() {
    return this._allowedRoles;
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

  // default_directory_policy - computed: true, optional: true, required: false
  private _defaultDirectoryPolicy?: string; 
  public get defaultDirectoryPolicy() {
    return this.getStringAttribute('default_directory_policy');
  }
  public set defaultDirectoryPolicy(value: string) {
    this._defaultDirectoryPolicy = value;
  }
  public resetDefaultDirectoryPolicy() {
    this._defaultDirectoryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDirectoryPolicyInput() {
    return this._defaultDirectoryPolicy;
  }

  // dns_resolver - computed: false, optional: true, required: false
  private _dnsResolver?: string; 
  public get dnsResolver() {
    return this.getStringAttribute('dns_resolver');
  }
  public set dnsResolver(value: string) {
    this._dnsResolver = value;
  }
  public resetDnsResolver() {
    this._dnsResolver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsResolverInput() {
    return this._dnsResolver;
  }

  // eab_policy - computed: true, optional: true, required: false
  private _eabPolicy?: string; 
  public get eabPolicy() {
    return this.getStringAttribute('eab_policy');
  }
  public set eabPolicy(value: string) {
    this._eabPolicy = value;
  }
  public resetEabPolicy() {
    this._eabPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eabPolicyInput() {
    return this._eabPolicy;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
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

  // max_ttl - computed: true, optional: true, required: false
  private _maxTtl?: number; 
  public get maxTtl() {
    return this.getNumberAttribute('max_ttl');
  }
  public set maxTtl(value: number) {
    this._maxTtl = value;
  }
  public resetMaxTtl() {
    this._maxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTtlInput() {
    return this._maxTtl;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_role_ext_key_usage: cdktf.booleanToTerraform(this._allowRoleExtKeyUsage),
      allowed_issuers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedIssuers),
      allowed_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedRoles),
      backend: cdktf.stringToTerraform(this._backend),
      default_directory_policy: cdktf.stringToTerraform(this._defaultDirectoryPolicy),
      dns_resolver: cdktf.stringToTerraform(this._dnsResolver),
      eab_policy: cdktf.stringToTerraform(this._eabPolicy),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      max_ttl: cdktf.numberToTerraform(this._maxTtl),
      namespace: cdktf.stringToTerraform(this._namespace),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_role_ext_key_usage: {
        value: cdktf.booleanToHclTerraform(this._allowRoleExtKeyUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_issuers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedIssuers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      allowed_roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedRoles),
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
      default_directory_policy: {
        value: cdktf.stringToHclTerraform(this._defaultDirectoryPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_resolver: {
        value: cdktf.stringToHclTerraform(this._dnsResolver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eab_policy: {
        value: cdktf.stringToHclTerraform(this._eabPolicy),
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
      max_ttl: {
        value: cdktf.numberToHclTerraform(this._maxTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
