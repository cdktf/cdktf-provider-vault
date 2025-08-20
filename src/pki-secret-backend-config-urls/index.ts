/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_urls
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PkiSecretBackendConfigUrlsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The path of the PKI secret backend the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_urls#backend PkiSecretBackendConfigUrls#backend}
  */
  readonly backend: string;
  /**
  * Specifies the URL values for the CRL Distribution Points field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_urls#crl_distribution_points PkiSecretBackendConfigUrls#crl_distribution_points}
  */
  readonly crlDistributionPoints?: string[];
  /**
  * Specifies that templating of AIA fields is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_urls#enable_templating PkiSecretBackendConfigUrls#enable_templating}
  */
  readonly enableTemplating?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_urls#id PkiSecretBackendConfigUrls#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the URL values for the Issuing Certificate field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_urls#issuing_certificates PkiSecretBackendConfigUrls#issuing_certificates}
  */
  readonly issuingCertificates?: string[];
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_urls#namespace PkiSecretBackendConfigUrls#namespace}
  */
  readonly namespace?: string;
  /**
  * Specifies the URL values for the OCSP Servers field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_urls#ocsp_servers PkiSecretBackendConfigUrls#ocsp_servers}
  */
  readonly ocspServers?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_urls vault_pki_secret_backend_config_urls}
*/
export class PkiSecretBackendConfigUrls extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_pki_secret_backend_config_urls";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PkiSecretBackendConfigUrls resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PkiSecretBackendConfigUrls to import
  * @param importFromId The id of the existing PkiSecretBackendConfigUrls that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_urls#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PkiSecretBackendConfigUrls to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_pki_secret_backend_config_urls", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_urls vault_pki_secret_backend_config_urls} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PkiSecretBackendConfigUrlsConfig
  */
  public constructor(scope: Construct, id: string, config: PkiSecretBackendConfigUrlsConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_pki_secret_backend_config_urls',
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
    this._backend = config.backend;
    this._crlDistributionPoints = config.crlDistributionPoints;
    this._enableTemplating = config.enableTemplating;
    this._id = config.id;
    this._issuingCertificates = config.issuingCertificates;
    this._namespace = config.namespace;
    this._ocspServers = config.ocspServers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // crl_distribution_points - computed: false, optional: true, required: false
  private _crlDistributionPoints?: string[]; 
  public get crlDistributionPoints() {
    return this.getListAttribute('crl_distribution_points');
  }
  public set crlDistributionPoints(value: string[]) {
    this._crlDistributionPoints = value;
  }
  public resetCrlDistributionPoints() {
    this._crlDistributionPoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlDistributionPointsInput() {
    return this._crlDistributionPoints;
  }

  // enable_templating - computed: false, optional: true, required: false
  private _enableTemplating?: boolean | cdktf.IResolvable; 
  public get enableTemplating() {
    return this.getBooleanAttribute('enable_templating');
  }
  public set enableTemplating(value: boolean | cdktf.IResolvable) {
    this._enableTemplating = value;
  }
  public resetEnableTemplating() {
    this._enableTemplating = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTemplatingInput() {
    return this._enableTemplating;
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

  // issuing_certificates - computed: false, optional: true, required: false
  private _issuingCertificates?: string[]; 
  public get issuingCertificates() {
    return this.getListAttribute('issuing_certificates');
  }
  public set issuingCertificates(value: string[]) {
    this._issuingCertificates = value;
  }
  public resetIssuingCertificates() {
    this._issuingCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuingCertificatesInput() {
    return this._issuingCertificates;
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

  // ocsp_servers - computed: false, optional: true, required: false
  private _ocspServers?: string[]; 
  public get ocspServers() {
    return this.getListAttribute('ocsp_servers');
  }
  public set ocspServers(value: string[]) {
    this._ocspServers = value;
  }
  public resetOcspServers() {
    this._ocspServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspServersInput() {
    return this._ocspServers;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend: cdktf.stringToTerraform(this._backend),
      crl_distribution_points: cdktf.listMapper(cdktf.stringToTerraform, false)(this._crlDistributionPoints),
      enable_templating: cdktf.booleanToTerraform(this._enableTemplating),
      id: cdktf.stringToTerraform(this._id),
      issuing_certificates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._issuingCertificates),
      namespace: cdktf.stringToTerraform(this._namespace),
      ocsp_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ocspServers),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backend: {
        value: cdktf.stringToHclTerraform(this._backend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crl_distribution_points: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._crlDistributionPoints),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      enable_templating: {
        value: cdktf.booleanToHclTerraform(this._enableTemplating),
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
      issuing_certificates: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._issuingCertificates),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ocsp_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ocspServers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
