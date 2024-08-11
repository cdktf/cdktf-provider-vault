/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedKeysConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#id ManagedKeys#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#namespace ManagedKeys#namespace}
  */
  readonly namespace?: string;
  /**
  * aws block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#aws ManagedKeys#aws}
  */
  readonly aws?: ManagedKeysAws[] | cdktf.IResolvable;
  /**
  * azure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#azure ManagedKeys#azure}
  */
  readonly azure?: ManagedKeysAzure[] | cdktf.IResolvable;
  /**
  * pkcs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#pkcs ManagedKeys#pkcs}
  */
  readonly pkcs?: ManagedKeysPkcs[] | cdktf.IResolvable;
}
export interface ManagedKeysAws {
  /**
  * The AWS access key to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#access_key ManagedKeys#access_key}
  */
  readonly accessKey: string;
  /**
  * If no existing key can be found in the referenced backend, instructs Vault to generate a key within the backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#allow_generate_key ManagedKeys#allow_generate_key}
  */
  readonly allowGenerateKey?: boolean | cdktf.IResolvable;
  /**
  * Controls the ability for Vault to replace through generation or importing a key into the configured backend even if a key is present, if set to false those operations are forbidden if a key exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#allow_replace_key ManagedKeys#allow_replace_key}
  */
  readonly allowReplaceKey?: boolean | cdktf.IResolvable;
  /**
  * Controls the ability for Vault to import a key to the configured backend, if 'false', those operations will be forbidden
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#allow_store_key ManagedKeys#allow_store_key}
  */
  readonly allowStoreKey?: boolean | cdktf.IResolvable;
  /**
  * Allow usage from any mount point within the namespace if 'true'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#any_mount ManagedKeys#any_mount}
  */
  readonly anyMount?: boolean | cdktf.IResolvable;
  /**
  * The curve to use for an ECDSA key. Used when key_type is 'ECDSA'. Required if 'allow_generate_key' is true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#curve ManagedKeys#curve}
  */
  readonly curve?: string;
  /**
  * Used to specify a custom AWS endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#endpoint ManagedKeys#endpoint}
  */
  readonly endpoint?: string;
  /**
  * The size in bits for an RSA key. This field is required when 'key_type' is 'RSA'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#key_bits ManagedKeys#key_bits}
  */
  readonly keyBits: string;
  /**
  * The type of key to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#key_type ManagedKeys#key_type}
  */
  readonly keyType: string;
  /**
  * An identifier for the key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#kms_key ManagedKeys#kms_key}
  */
  readonly kmsKey: string;
  /**
  * A unique lowercase name that serves as identifying the key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#name ManagedKeys#name}
  */
  readonly name: string;
  /**
  * The AWS region where the keys are stored (or will be stored)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#region ManagedKeys#region}
  */
  readonly region?: string;
  /**
  * The AWS secret key to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#secret_key ManagedKeys#secret_key}
  */
  readonly secretKey: string;
}

export function managedKeysAwsToTerraform(struct?: ManagedKeysAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    allow_generate_key: cdktf.booleanToTerraform(struct!.allowGenerateKey),
    allow_replace_key: cdktf.booleanToTerraform(struct!.allowReplaceKey),
    allow_store_key: cdktf.booleanToTerraform(struct!.allowStoreKey),
    any_mount: cdktf.booleanToTerraform(struct!.anyMount),
    curve: cdktf.stringToTerraform(struct!.curve),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    key_bits: cdktf.stringToTerraform(struct!.keyBits),
    key_type: cdktf.stringToTerraform(struct!.keyType),
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
    name: cdktf.stringToTerraform(struct!.name),
    region: cdktf.stringToTerraform(struct!.region),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
  }
}


export function managedKeysAwsToHclTerraform(struct?: ManagedKeysAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_generate_key: {
      value: cdktf.booleanToHclTerraform(struct!.allowGenerateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_replace_key: {
      value: cdktf.booleanToHclTerraform(struct!.allowReplaceKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_store_key: {
      value: cdktf.booleanToHclTerraform(struct!.allowStoreKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_mount: {
      value: cdktf.booleanToHclTerraform(struct!.anyMount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    curve: {
      value: cdktf.stringToHclTerraform(struct!.curve),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_bits: {
      value: cdktf.stringToHclTerraform(struct!.keyBits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_type: {
      value: cdktf.stringToHclTerraform(struct!.keyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key: {
      value: cdktf.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedKeysAwsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagedKeysAws | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._allowGenerateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowGenerateKey = this._allowGenerateKey;
    }
    if (this._allowReplaceKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowReplaceKey = this._allowReplaceKey;
    }
    if (this._allowStoreKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowStoreKey = this._allowStoreKey;
    }
    if (this._anyMount !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyMount = this._anyMount;
    }
    if (this._curve !== undefined) {
      hasAnyValues = true;
      internalValueResult.curve = this._curve;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._keyBits !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyBits = this._keyBits;
    }
    if (this._keyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyType = this._keyType;
    }
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedKeysAws | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKey = undefined;
      this._allowGenerateKey = undefined;
      this._allowReplaceKey = undefined;
      this._allowStoreKey = undefined;
      this._anyMount = undefined;
      this._curve = undefined;
      this._endpoint = undefined;
      this._keyBits = undefined;
      this._keyType = undefined;
      this._kmsKey = undefined;
      this._name = undefined;
      this._region = undefined;
      this._secretKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKey = value.accessKey;
      this._allowGenerateKey = value.allowGenerateKey;
      this._allowReplaceKey = value.allowReplaceKey;
      this._allowStoreKey = value.allowStoreKey;
      this._anyMount = value.anyMount;
      this._curve = value.curve;
      this._endpoint = value.endpoint;
      this._keyBits = value.keyBits;
      this._keyType = value.keyType;
      this._kmsKey = value.kmsKey;
      this._name = value.name;
      this._region = value.region;
      this._secretKey = value.secretKey;
    }
  }

  // access_key - computed: false, optional: false, required: true
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // allow_generate_key - computed: true, optional: true, required: false
  private _allowGenerateKey?: boolean | cdktf.IResolvable; 
  public get allowGenerateKey() {
    return this.getBooleanAttribute('allow_generate_key');
  }
  public set allowGenerateKey(value: boolean | cdktf.IResolvable) {
    this._allowGenerateKey = value;
  }
  public resetAllowGenerateKey() {
    this._allowGenerateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowGenerateKeyInput() {
    return this._allowGenerateKey;
  }

  // allow_replace_key - computed: true, optional: true, required: false
  private _allowReplaceKey?: boolean | cdktf.IResolvable; 
  public get allowReplaceKey() {
    return this.getBooleanAttribute('allow_replace_key');
  }
  public set allowReplaceKey(value: boolean | cdktf.IResolvable) {
    this._allowReplaceKey = value;
  }
  public resetAllowReplaceKey() {
    this._allowReplaceKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowReplaceKeyInput() {
    return this._allowReplaceKey;
  }

  // allow_store_key - computed: true, optional: true, required: false
  private _allowStoreKey?: boolean | cdktf.IResolvable; 
  public get allowStoreKey() {
    return this.getBooleanAttribute('allow_store_key');
  }
  public set allowStoreKey(value: boolean | cdktf.IResolvable) {
    this._allowStoreKey = value;
  }
  public resetAllowStoreKey() {
    this._allowStoreKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowStoreKeyInput() {
    return this._allowStoreKey;
  }

  // any_mount - computed: true, optional: true, required: false
  private _anyMount?: boolean | cdktf.IResolvable; 
  public get anyMount() {
    return this.getBooleanAttribute('any_mount');
  }
  public set anyMount(value: boolean | cdktf.IResolvable) {
    this._anyMount = value;
  }
  public resetAnyMount() {
    this._anyMount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyMountInput() {
    return this._anyMount;
  }

  // curve - computed: false, optional: true, required: false
  private _curve?: string; 
  public get curve() {
    return this.getStringAttribute('curve');
  }
  public set curve(value: string) {
    this._curve = value;
  }
  public resetCurve() {
    this._curve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get curveInput() {
    return this._curve;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // key_bits - computed: false, optional: false, required: true
  private _keyBits?: string; 
  public get keyBits() {
    return this.getStringAttribute('key_bits');
  }
  public set keyBits(value: string) {
    this._keyBits = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyBitsInput() {
    return this._keyBits;
  }

  // key_type - computed: false, optional: false, required: true
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }

  // kms_key - computed: false, optional: false, required: true
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_key - computed: false, optional: false, required: true
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class ManagedKeysAwsList extends cdktf.ComplexList {
  public internalValue? : ManagedKeysAws[] | cdktf.IResolvable

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
  public get(index: number): ManagedKeysAwsOutputReference {
    return new ManagedKeysAwsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedKeysAzure {
  /**
  * If no existing key can be found in the referenced backend, instructs Vault to generate a key within the backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#allow_generate_key ManagedKeys#allow_generate_key}
  */
  readonly allowGenerateKey?: boolean | cdktf.IResolvable;
  /**
  * Controls the ability for Vault to replace through generation or importing a key into the configured backend even if a key is present, if set to false those operations are forbidden if a key exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#allow_replace_key ManagedKeys#allow_replace_key}
  */
  readonly allowReplaceKey?: boolean | cdktf.IResolvable;
  /**
  * Controls the ability for Vault to import a key to the configured backend, if 'false', those operations will be forbidden
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#allow_store_key ManagedKeys#allow_store_key}
  */
  readonly allowStoreKey?: boolean | cdktf.IResolvable;
  /**
  * Allow usage from any mount point within the namespace if 'true'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#any_mount ManagedKeys#any_mount}
  */
  readonly anyMount?: boolean | cdktf.IResolvable;
  /**
  * The client id for credentials to query the Azure APIs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#client_id ManagedKeys#client_id}
  */
  readonly clientId: string;
  /**
  * The client secret for credentials to query the Azure APIs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#client_secret ManagedKeys#client_secret}
  */
  readonly clientSecret: string;
  /**
  * The Azure Cloud environment API endpoints to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#environment ManagedKeys#environment}
  */
  readonly environment?: string;
  /**
  * The size in bits for an RSA key. This field is required when 'key_type' is 'RSA' or when 'allow_generate_key' is true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#key_bits ManagedKeys#key_bits}
  */
  readonly keyBits?: string;
  /**
  * The Key Vault key to use for encryption and decryption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#key_name ManagedKeys#key_name}
  */
  readonly keyName: string;
  /**
  * The type of key to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#key_type ManagedKeys#key_type}
  */
  readonly keyType: string;
  /**
  * A unique lowercase name that serves as identifying the key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#name ManagedKeys#name}
  */
  readonly name: string;
  /**
  * The Azure Key Vault resource's DNS Suffix to connect to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#resource ManagedKeys#resource}
  */
  readonly resource?: string;
  /**
  * The tenant id for the Azure Active Directory organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#tenant_id ManagedKeys#tenant_id}
  */
  readonly tenantId: string;
  /**
  * The Key Vault vault to use the encryption keys for encryption and decryption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#vault_name ManagedKeys#vault_name}
  */
  readonly vaultName: string;
}

export function managedKeysAzureToTerraform(struct?: ManagedKeysAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_generate_key: cdktf.booleanToTerraform(struct!.allowGenerateKey),
    allow_replace_key: cdktf.booleanToTerraform(struct!.allowReplaceKey),
    allow_store_key: cdktf.booleanToTerraform(struct!.allowStoreKey),
    any_mount: cdktf.booleanToTerraform(struct!.anyMount),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    environment: cdktf.stringToTerraform(struct!.environment),
    key_bits: cdktf.stringToTerraform(struct!.keyBits),
    key_name: cdktf.stringToTerraform(struct!.keyName),
    key_type: cdktf.stringToTerraform(struct!.keyType),
    name: cdktf.stringToTerraform(struct!.name),
    resource: cdktf.stringToTerraform(struct!.resource),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    vault_name: cdktf.stringToTerraform(struct!.vaultName),
  }
}


export function managedKeysAzureToHclTerraform(struct?: ManagedKeysAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_generate_key: {
      value: cdktf.booleanToHclTerraform(struct!.allowGenerateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_replace_key: {
      value: cdktf.booleanToHclTerraform(struct!.allowReplaceKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_store_key: {
      value: cdktf.booleanToHclTerraform(struct!.allowStoreKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_mount: {
      value: cdktf.booleanToHclTerraform(struct!.anyMount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment: {
      value: cdktf.stringToHclTerraform(struct!.environment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_bits: {
      value: cdktf.stringToHclTerraform(struct!.keyBits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_name: {
      value: cdktf.stringToHclTerraform(struct!.keyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_type: {
      value: cdktf.stringToHclTerraform(struct!.keyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_name: {
      value: cdktf.stringToHclTerraform(struct!.vaultName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedKeysAzureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagedKeysAzure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowGenerateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowGenerateKey = this._allowGenerateKey;
    }
    if (this._allowReplaceKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowReplaceKey = this._allowReplaceKey;
    }
    if (this._allowStoreKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowStoreKey = this._allowStoreKey;
    }
    if (this._anyMount !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyMount = this._anyMount;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._keyBits !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyBits = this._keyBits;
    }
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._keyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyType = this._keyType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._vaultName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultName = this._vaultName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedKeysAzure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowGenerateKey = undefined;
      this._allowReplaceKey = undefined;
      this._allowStoreKey = undefined;
      this._anyMount = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._environment = undefined;
      this._keyBits = undefined;
      this._keyName = undefined;
      this._keyType = undefined;
      this._name = undefined;
      this._resource = undefined;
      this._tenantId = undefined;
      this._vaultName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowGenerateKey = value.allowGenerateKey;
      this._allowReplaceKey = value.allowReplaceKey;
      this._allowStoreKey = value.allowStoreKey;
      this._anyMount = value.anyMount;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._environment = value.environment;
      this._keyBits = value.keyBits;
      this._keyName = value.keyName;
      this._keyType = value.keyType;
      this._name = value.name;
      this._resource = value.resource;
      this._tenantId = value.tenantId;
      this._vaultName = value.vaultName;
    }
  }

  // allow_generate_key - computed: true, optional: true, required: false
  private _allowGenerateKey?: boolean | cdktf.IResolvable; 
  public get allowGenerateKey() {
    return this.getBooleanAttribute('allow_generate_key');
  }
  public set allowGenerateKey(value: boolean | cdktf.IResolvable) {
    this._allowGenerateKey = value;
  }
  public resetAllowGenerateKey() {
    this._allowGenerateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowGenerateKeyInput() {
    return this._allowGenerateKey;
  }

  // allow_replace_key - computed: true, optional: true, required: false
  private _allowReplaceKey?: boolean | cdktf.IResolvable; 
  public get allowReplaceKey() {
    return this.getBooleanAttribute('allow_replace_key');
  }
  public set allowReplaceKey(value: boolean | cdktf.IResolvable) {
    this._allowReplaceKey = value;
  }
  public resetAllowReplaceKey() {
    this._allowReplaceKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowReplaceKeyInput() {
    return this._allowReplaceKey;
  }

  // allow_store_key - computed: true, optional: true, required: false
  private _allowStoreKey?: boolean | cdktf.IResolvable; 
  public get allowStoreKey() {
    return this.getBooleanAttribute('allow_store_key');
  }
  public set allowStoreKey(value: boolean | cdktf.IResolvable) {
    this._allowStoreKey = value;
  }
  public resetAllowStoreKey() {
    this._allowStoreKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowStoreKeyInput() {
    return this._allowStoreKey;
  }

  // any_mount - computed: true, optional: true, required: false
  private _anyMount?: boolean | cdktf.IResolvable; 
  public get anyMount() {
    return this.getBooleanAttribute('any_mount');
  }
  public set anyMount(value: boolean | cdktf.IResolvable) {
    this._anyMount = value;
  }
  public resetAnyMount() {
    this._anyMount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyMountInput() {
    return this._anyMount;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // environment - computed: true, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // key_bits - computed: false, optional: true, required: false
  private _keyBits?: string; 
  public get keyBits() {
    return this.getStringAttribute('key_bits');
  }
  public set keyBits(value: string) {
    this._keyBits = value;
  }
  public resetKeyBits() {
    this._keyBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyBitsInput() {
    return this._keyBits;
  }

  // key_name - computed: false, optional: false, required: true
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // key_type - computed: false, optional: false, required: true
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // resource - computed: true, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // vault_name - computed: false, optional: false, required: true
  private _vaultName?: string; 
  public get vaultName() {
    return this.getStringAttribute('vault_name');
  }
  public set vaultName(value: string) {
    this._vaultName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultNameInput() {
    return this._vaultName;
  }
}

export class ManagedKeysAzureList extends cdktf.ComplexList {
  public internalValue? : ManagedKeysAzure[] | cdktf.IResolvable

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
  public get(index: number): ManagedKeysAzureOutputReference {
    return new ManagedKeysAzureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedKeysPkcs {
  /**
  * If no existing key can be found in the referenced backend, instructs Vault to generate a key within the backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#allow_generate_key ManagedKeys#allow_generate_key}
  */
  readonly allowGenerateKey?: boolean | cdktf.IResolvable;
  /**
  * Controls the ability for Vault to replace through generation or importing a key into the configured backend even if a key is present, if set to false those operations are forbidden if a key exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#allow_replace_key ManagedKeys#allow_replace_key}
  */
  readonly allowReplaceKey?: boolean | cdktf.IResolvable;
  /**
  * Controls the ability for Vault to import a key to the configured backend, if 'false', those operations will be forbidden
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#allow_store_key ManagedKeys#allow_store_key}
  */
  readonly allowStoreKey?: boolean | cdktf.IResolvable;
  /**
  * Allow usage from any mount point within the namespace if 'true'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#any_mount ManagedKeys#any_mount}
  */
  readonly anyMount?: boolean | cdktf.IResolvable;
  /**
  * Supplies the curve value when using the 'CKM_ECDSA' mechanism. Required if 'allow_generate_key' is true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#curve ManagedKeys#curve}
  */
  readonly curve?: string;
  /**
  * Force all operations to open up a read-write session to the HSM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#force_rw_session ManagedKeys#force_rw_session}
  */
  readonly forceRwSession?: string;
  /**
  * Supplies the size in bits of the key when using 'CKM_RSA_PKCS_PSS', 'CKM_RSA_PKCS_OAEP' or 'CKM_RSA_PKCS' as a value for 'mechanism'. Required if 'allow_generate_key' is true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#key_bits ManagedKeys#key_bits}
  */
  readonly keyBits?: string;
  /**
  * The id of a PKCS#11 key to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#key_id ManagedKeys#key_id}
  */
  readonly keyId: string;
  /**
  * The label of the key to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#key_label ManagedKeys#key_label}
  */
  readonly keyLabel: string;
  /**
  * The name of the kms_library stanza to use from Vault's config to lookup the local library path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#library ManagedKeys#library}
  */
  readonly library: string;
  /**
  * The encryption/decryption mechanism to use, specified as a hexadecimal (prefixed by 0x) string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#mechanism ManagedKeys#mechanism}
  */
  readonly mechanism: string;
  /**
  * A unique lowercase name that serves as identifying the key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#name ManagedKeys#name}
  */
  readonly name: string;
  /**
  * The PIN for login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#pin ManagedKeys#pin}
  */
  readonly pin: string;
  /**
  * The slot number to use, specified as a string in a decimal format (e.g. '2305843009213693953')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#slot ManagedKeys#slot}
  */
  readonly slot?: string;
  /**
  * The slot token label to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#token_label ManagedKeys#token_label}
  */
  readonly tokenLabel?: string;
}

export function managedKeysPkcsToTerraform(struct?: ManagedKeysPkcs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_generate_key: cdktf.booleanToTerraform(struct!.allowGenerateKey),
    allow_replace_key: cdktf.booleanToTerraform(struct!.allowReplaceKey),
    allow_store_key: cdktf.booleanToTerraform(struct!.allowStoreKey),
    any_mount: cdktf.booleanToTerraform(struct!.anyMount),
    curve: cdktf.stringToTerraform(struct!.curve),
    force_rw_session: cdktf.stringToTerraform(struct!.forceRwSession),
    key_bits: cdktf.stringToTerraform(struct!.keyBits),
    key_id: cdktf.stringToTerraform(struct!.keyId),
    key_label: cdktf.stringToTerraform(struct!.keyLabel),
    library: cdktf.stringToTerraform(struct!.library),
    mechanism: cdktf.stringToTerraform(struct!.mechanism),
    name: cdktf.stringToTerraform(struct!.name),
    pin: cdktf.stringToTerraform(struct!.pin),
    slot: cdktf.stringToTerraform(struct!.slot),
    token_label: cdktf.stringToTerraform(struct!.tokenLabel),
  }
}


export function managedKeysPkcsToHclTerraform(struct?: ManagedKeysPkcs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_generate_key: {
      value: cdktf.booleanToHclTerraform(struct!.allowGenerateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_replace_key: {
      value: cdktf.booleanToHclTerraform(struct!.allowReplaceKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_store_key: {
      value: cdktf.booleanToHclTerraform(struct!.allowStoreKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_mount: {
      value: cdktf.booleanToHclTerraform(struct!.anyMount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    curve: {
      value: cdktf.stringToHclTerraform(struct!.curve),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    force_rw_session: {
      value: cdktf.stringToHclTerraform(struct!.forceRwSession),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_bits: {
      value: cdktf.stringToHclTerraform(struct!.keyBits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_label: {
      value: cdktf.stringToHclTerraform(struct!.keyLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    library: {
      value: cdktf.stringToHclTerraform(struct!.library),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mechanism: {
      value: cdktf.stringToHclTerraform(struct!.mechanism),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pin: {
      value: cdktf.stringToHclTerraform(struct!.pin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slot: {
      value: cdktf.stringToHclTerraform(struct!.slot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_label: {
      value: cdktf.stringToHclTerraform(struct!.tokenLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedKeysPkcsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagedKeysPkcs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowGenerateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowGenerateKey = this._allowGenerateKey;
    }
    if (this._allowReplaceKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowReplaceKey = this._allowReplaceKey;
    }
    if (this._allowStoreKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowStoreKey = this._allowStoreKey;
    }
    if (this._anyMount !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyMount = this._anyMount;
    }
    if (this._curve !== undefined) {
      hasAnyValues = true;
      internalValueResult.curve = this._curve;
    }
    if (this._forceRwSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceRwSession = this._forceRwSession;
    }
    if (this._keyBits !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyBits = this._keyBits;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._keyLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyLabel = this._keyLabel;
    }
    if (this._library !== undefined) {
      hasAnyValues = true;
      internalValueResult.library = this._library;
    }
    if (this._mechanism !== undefined) {
      hasAnyValues = true;
      internalValueResult.mechanism = this._mechanism;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pin !== undefined) {
      hasAnyValues = true;
      internalValueResult.pin = this._pin;
    }
    if (this._slot !== undefined) {
      hasAnyValues = true;
      internalValueResult.slot = this._slot;
    }
    if (this._tokenLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenLabel = this._tokenLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedKeysPkcs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowGenerateKey = undefined;
      this._allowReplaceKey = undefined;
      this._allowStoreKey = undefined;
      this._anyMount = undefined;
      this._curve = undefined;
      this._forceRwSession = undefined;
      this._keyBits = undefined;
      this._keyId = undefined;
      this._keyLabel = undefined;
      this._library = undefined;
      this._mechanism = undefined;
      this._name = undefined;
      this._pin = undefined;
      this._slot = undefined;
      this._tokenLabel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowGenerateKey = value.allowGenerateKey;
      this._allowReplaceKey = value.allowReplaceKey;
      this._allowStoreKey = value.allowStoreKey;
      this._anyMount = value.anyMount;
      this._curve = value.curve;
      this._forceRwSession = value.forceRwSession;
      this._keyBits = value.keyBits;
      this._keyId = value.keyId;
      this._keyLabel = value.keyLabel;
      this._library = value.library;
      this._mechanism = value.mechanism;
      this._name = value.name;
      this._pin = value.pin;
      this._slot = value.slot;
      this._tokenLabel = value.tokenLabel;
    }
  }

  // allow_generate_key - computed: true, optional: true, required: false
  private _allowGenerateKey?: boolean | cdktf.IResolvable; 
  public get allowGenerateKey() {
    return this.getBooleanAttribute('allow_generate_key');
  }
  public set allowGenerateKey(value: boolean | cdktf.IResolvable) {
    this._allowGenerateKey = value;
  }
  public resetAllowGenerateKey() {
    this._allowGenerateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowGenerateKeyInput() {
    return this._allowGenerateKey;
  }

  // allow_replace_key - computed: true, optional: true, required: false
  private _allowReplaceKey?: boolean | cdktf.IResolvable; 
  public get allowReplaceKey() {
    return this.getBooleanAttribute('allow_replace_key');
  }
  public set allowReplaceKey(value: boolean | cdktf.IResolvable) {
    this._allowReplaceKey = value;
  }
  public resetAllowReplaceKey() {
    this._allowReplaceKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowReplaceKeyInput() {
    return this._allowReplaceKey;
  }

  // allow_store_key - computed: true, optional: true, required: false
  private _allowStoreKey?: boolean | cdktf.IResolvable; 
  public get allowStoreKey() {
    return this.getBooleanAttribute('allow_store_key');
  }
  public set allowStoreKey(value: boolean | cdktf.IResolvable) {
    this._allowStoreKey = value;
  }
  public resetAllowStoreKey() {
    this._allowStoreKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowStoreKeyInput() {
    return this._allowStoreKey;
  }

  // any_mount - computed: true, optional: true, required: false
  private _anyMount?: boolean | cdktf.IResolvable; 
  public get anyMount() {
    return this.getBooleanAttribute('any_mount');
  }
  public set anyMount(value: boolean | cdktf.IResolvable) {
    this._anyMount = value;
  }
  public resetAnyMount() {
    this._anyMount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyMountInput() {
    return this._anyMount;
  }

  // curve - computed: false, optional: true, required: false
  private _curve?: string; 
  public get curve() {
    return this.getStringAttribute('curve');
  }
  public set curve(value: string) {
    this._curve = value;
  }
  public resetCurve() {
    this._curve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get curveInput() {
    return this._curve;
  }

  // force_rw_session - computed: false, optional: true, required: false
  private _forceRwSession?: string; 
  public get forceRwSession() {
    return this.getStringAttribute('force_rw_session');
  }
  public set forceRwSession(value: string) {
    this._forceRwSession = value;
  }
  public resetForceRwSession() {
    this._forceRwSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceRwSessionInput() {
    return this._forceRwSession;
  }

  // key_bits - computed: false, optional: true, required: false
  private _keyBits?: string; 
  public get keyBits() {
    return this.getStringAttribute('key_bits');
  }
  public set keyBits(value: string) {
    this._keyBits = value;
  }
  public resetKeyBits() {
    this._keyBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyBitsInput() {
    return this._keyBits;
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // key_label - computed: false, optional: false, required: true
  private _keyLabel?: string; 
  public get keyLabel() {
    return this.getStringAttribute('key_label');
  }
  public set keyLabel(value: string) {
    this._keyLabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyLabelInput() {
    return this._keyLabel;
  }

  // library - computed: false, optional: false, required: true
  private _library?: string; 
  public get library() {
    return this.getStringAttribute('library');
  }
  public set library(value: string) {
    this._library = value;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryInput() {
    return this._library;
  }

  // mechanism - computed: false, optional: false, required: true
  private _mechanism?: string; 
  public get mechanism() {
    return this.getStringAttribute('mechanism');
  }
  public set mechanism(value: string) {
    this._mechanism = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mechanismInput() {
    return this._mechanism;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // pin - computed: false, optional: false, required: true
  private _pin?: string; 
  public get pin() {
    return this.getStringAttribute('pin');
  }
  public set pin(value: string) {
    this._pin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pinInput() {
    return this._pin;
  }

  // slot - computed: false, optional: true, required: false
  private _slot?: string; 
  public get slot() {
    return this.getStringAttribute('slot');
  }
  public set slot(value: string) {
    this._slot = value;
  }
  public resetSlot() {
    this._slot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotInput() {
    return this._slot;
  }

  // token_label - computed: false, optional: true, required: false
  private _tokenLabel?: string; 
  public get tokenLabel() {
    return this.getStringAttribute('token_label');
  }
  public set tokenLabel(value: string) {
    this._tokenLabel = value;
  }
  public resetTokenLabel() {
    this._tokenLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenLabelInput() {
    return this._tokenLabel;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class ManagedKeysPkcsList extends cdktf.ComplexList {
  public internalValue? : ManagedKeysPkcs[] | cdktf.IResolvable

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
  public get(index: number): ManagedKeysPkcsOutputReference {
    return new ManagedKeysPkcsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys vault_managed_keys}
*/
export class ManagedKeys extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_managed_keys";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagedKeys resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagedKeys to import
  * @param importFromId The id of the existing ManagedKeys that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagedKeys to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_managed_keys", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/managed_keys vault_managed_keys} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedKeysConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ManagedKeysConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vault_managed_keys',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '4.4.0',
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
    this._id = config.id;
    this._namespace = config.namespace;
    this._aws.internalValue = config.aws;
    this._azure.internalValue = config.azure;
    this._pkcs.internalValue = config.pkcs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // aws - computed: false, optional: true, required: false
  private _aws = new ManagedKeysAwsList(this, "aws", true);
  public get aws() {
    return this._aws;
  }
  public putAws(value: ManagedKeysAws[] | cdktf.IResolvable) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // azure - computed: false, optional: true, required: false
  private _azure = new ManagedKeysAzureList(this, "azure", true);
  public get azure() {
    return this._azure;
  }
  public putAzure(value: ManagedKeysAzure[] | cdktf.IResolvable) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // pkcs - computed: false, optional: true, required: false
  private _pkcs = new ManagedKeysPkcsList(this, "pkcs", true);
  public get pkcs() {
    return this._pkcs;
  }
  public putPkcs(value: ManagedKeysPkcs[] | cdktf.IResolvable) {
    this._pkcs.internalValue = value;
  }
  public resetPkcs() {
    this._pkcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkcsInput() {
    return this._pkcs.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      aws: cdktf.listMapper(managedKeysAwsToTerraform, true)(this._aws.internalValue),
      azure: cdktf.listMapper(managedKeysAzureToTerraform, true)(this._azure.internalValue),
      pkcs: cdktf.listMapper(managedKeysPkcsToTerraform, true)(this._pkcs.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      aws: {
        value: cdktf.listMapperHcl(managedKeysAwsToHclTerraform, true)(this._aws.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ManagedKeysAwsList",
      },
      azure: {
        value: cdktf.listMapperHcl(managedKeysAzureToHclTerraform, true)(this._azure.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ManagedKeysAzureList",
      },
      pkcs: {
        value: cdktf.listMapperHcl(managedKeysPkcsToHclTerraform, true)(this._pkcs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ManagedKeysPkcsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
