/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpiffeAuthBackendConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of audience values allowed to match claims in JWT-SVIDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#audience SpiffeAuthBackendConfig#audience}
  */
  readonly audience?: string[];
  /**
  * When profile is 'https_spiffe_bundle', the bootstrapping bundle in SPIFFE format; when profile is 'static', either a bundle in SPIFFE format or PEM-encoded CA certificate(s)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#bundle SpiffeAuthBackendConfig#bundle}
  */
  readonly bundle?: string;
  /**
  * Don't attempt to fetch a bundle immediately; only applies when profile != static
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#defer_bundle_fetch SpiffeAuthBackendConfig#defer_bundle_fetch}
  */
  readonly deferBundleFetch?: boolean | cdktf.IResolvable;
  /**
  * PEM-encoded CA certificate(s) to validate the server reached by 'endpoint_url', if set this will override the default TLS trust store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#endpoint_root_ca_truststore_pem SpiffeAuthBackendConfig#endpoint_root_ca_truststore_pem}
  */
  readonly endpointRootCaTruststorePem?: string;
  /**
  * The server's SPIFFE ID to validate when profile is 'https_spiffe_bundle'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#endpoint_spiffe_id SpiffeAuthBackendConfig#endpoint_spiffe_id}
  */
  readonly endpointSpiffeId?: string;
  /**
  * The URI to be used when profile is 'https_web_bundle' or 'https_spiffe_bundle'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#endpoint_url SpiffeAuthBackendConfig#endpoint_url}
  */
  readonly endpointUrl?: string;
  /**
  * Mount path for the SPIFFE auth engine in Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#mount SpiffeAuthBackendConfig#mount}
  */
  readonly mount: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#namespace SpiffeAuthBackendConfig#namespace}
  */
  readonly namespace?: string;
  /**
  * The mechanism to fetch or embed the trust bundle to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#profile SpiffeAuthBackendConfig#profile}
  */
  readonly profile: string;
  /**
  * The SPIFFE trust domain for this backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#trust_domain SpiffeAuthBackendConfig#trust_domain}
  */
  readonly trustDomain: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config vault_spiffe_auth_backend_config}
*/
export class SpiffeAuthBackendConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_spiffe_auth_backend_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SpiffeAuthBackendConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SpiffeAuthBackendConfig to import
  * @param importFromId The id of the existing SpiffeAuthBackendConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SpiffeAuthBackendConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_spiffe_auth_backend_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config vault_spiffe_auth_backend_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpiffeAuthBackendConfigConfig
  */
  public constructor(scope: Construct, id: string, config: SpiffeAuthBackendConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_spiffe_auth_backend_config',
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
    this._audience = config.audience;
    this._bundle = config.bundle;
    this._deferBundleFetch = config.deferBundleFetch;
    this._endpointRootCaTruststorePem = config.endpointRootCaTruststorePem;
    this._endpointSpiffeId = config.endpointSpiffeId;
    this._endpointUrl = config.endpointUrl;
    this._mount = config.mount;
    this._namespace = config.namespace;
    this._profile = config.profile;
    this._trustDomain = config.trustDomain;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audience - computed: false, optional: true, required: false
  private _audience?: string[]; 
  public get audience() {
    return this.getListAttribute('audience');
  }
  public set audience(value: string[]) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // bundle - computed: false, optional: true, required: false
  private _bundle?: string; 
  public get bundle() {
    return this.getStringAttribute('bundle');
  }
  public set bundle(value: string) {
    this._bundle = value;
  }
  public resetBundle() {
    this._bundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleInput() {
    return this._bundle;
  }

  // defer_bundle_fetch - computed: false, optional: true, required: false
  private _deferBundleFetch?: boolean | cdktf.IResolvable; 
  public get deferBundleFetch() {
    return this.getBooleanAttribute('defer_bundle_fetch');
  }
  public set deferBundleFetch(value: boolean | cdktf.IResolvable) {
    this._deferBundleFetch = value;
  }
  public resetDeferBundleFetch() {
    this._deferBundleFetch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deferBundleFetchInput() {
    return this._deferBundleFetch;
  }

  // endpoint_root_ca_truststore_pem - computed: false, optional: true, required: false
  private _endpointRootCaTruststorePem?: string; 
  public get endpointRootCaTruststorePem() {
    return this.getStringAttribute('endpoint_root_ca_truststore_pem');
  }
  public set endpointRootCaTruststorePem(value: string) {
    this._endpointRootCaTruststorePem = value;
  }
  public resetEndpointRootCaTruststorePem() {
    this._endpointRootCaTruststorePem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointRootCaTruststorePemInput() {
    return this._endpointRootCaTruststorePem;
  }

  // endpoint_spiffe_id - computed: false, optional: true, required: false
  private _endpointSpiffeId?: string; 
  public get endpointSpiffeId() {
    return this.getStringAttribute('endpoint_spiffe_id');
  }
  public set endpointSpiffeId(value: string) {
    this._endpointSpiffeId = value;
  }
  public resetEndpointSpiffeId() {
    this._endpointSpiffeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointSpiffeIdInput() {
    return this._endpointSpiffeId;
  }

  // endpoint_url - computed: false, optional: true, required: false
  private _endpointUrl?: string; 
  public get endpointUrl() {
    return this.getStringAttribute('endpoint_url');
  }
  public set endpointUrl(value: string) {
    this._endpointUrl = value;
  }
  public resetEndpointUrl() {
    this._endpointUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointUrlInput() {
    return this._endpointUrl;
  }

  // mount - computed: false, optional: false, required: true
  private _mount?: string; 
  public get mount() {
    return this.getStringAttribute('mount');
  }
  public set mount(value: string) {
    this._mount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountInput() {
    return this._mount;
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

  // profile - computed: false, optional: false, required: true
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // trust_domain - computed: false, optional: false, required: true
  private _trustDomain?: string; 
  public get trustDomain() {
    return this.getStringAttribute('trust_domain');
  }
  public set trustDomain(value: string) {
    this._trustDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustDomainInput() {
    return this._trustDomain;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audience: cdktf.listMapper(cdktf.stringToTerraform, false)(this._audience),
      bundle: cdktf.stringToTerraform(this._bundle),
      defer_bundle_fetch: cdktf.booleanToTerraform(this._deferBundleFetch),
      endpoint_root_ca_truststore_pem: cdktf.stringToTerraform(this._endpointRootCaTruststorePem),
      endpoint_spiffe_id: cdktf.stringToTerraform(this._endpointSpiffeId),
      endpoint_url: cdktf.stringToTerraform(this._endpointUrl),
      mount: cdktf.stringToTerraform(this._mount),
      namespace: cdktf.stringToTerraform(this._namespace),
      profile: cdktf.stringToTerraform(this._profile),
      trust_domain: cdktf.stringToTerraform(this._trustDomain),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audience: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._audience),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      bundle: {
        value: cdktf.stringToHclTerraform(this._bundle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defer_bundle_fetch: {
        value: cdktf.booleanToHclTerraform(this._deferBundleFetch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      endpoint_root_ca_truststore_pem: {
        value: cdktf.stringToHclTerraform(this._endpointRootCaTruststorePem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_spiffe_id: {
        value: cdktf.stringToHclTerraform(this._endpointSpiffeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_url: {
        value: cdktf.stringToHclTerraform(this._endpointUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mount: {
        value: cdktf.stringToHclTerraform(this._mount),
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
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_domain: {
        value: cdktf.stringToHclTerraform(this._trustDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
