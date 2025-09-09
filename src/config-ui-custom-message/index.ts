/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/config_ui_custom_message
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigUiCustomMessageConfig extends cdktf.TerraformMetaArguments {
  /**
  * A flag indicating whether the custom message is displayed pre-login (false) or post-login (true)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/config_ui_custom_message#authenticated ConfigUiCustomMessage#authenticated}
  */
  readonly authenticated?: boolean | cdktf.IResolvable;
  /**
  * The ending time of the active period of the custom message. Can be omitted for non-expiring message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/config_ui_custom_message#end_time ConfigUiCustomMessage#end_time}
  */
  readonly endTime?: string;
  /**
  * The base64-encoded content of the custom message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/config_ui_custom_message#message_base64 ConfigUiCustomMessage#message_base64}
  */
  readonly messageBase64: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/config_ui_custom_message#namespace ConfigUiCustomMessage#namespace}
  */
  readonly namespace?: string;
  /**
  * A map containing additional options for the custom message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/config_ui_custom_message#options ConfigUiCustomMessage#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * The starting time of the active period of the custom message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/config_ui_custom_message#start_time ConfigUiCustomMessage#start_time}
  */
  readonly startTime: string;
  /**
  * The title of the custom message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/config_ui_custom_message#title ConfigUiCustomMessage#title}
  */
  readonly title: string;
  /**
  * The display type of custom message. Allowed values are banner and modal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/config_ui_custom_message#type ConfigUiCustomMessage#type}
  */
  readonly type?: string;
  /**
  * link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/config_ui_custom_message#link ConfigUiCustomMessage#link}
  */
  readonly link?: ConfigUiCustomMessageLink;
}
export interface ConfigUiCustomMessageLink {
  /**
  * The URL of the hyperlink
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/config_ui_custom_message#href ConfigUiCustomMessage#href}
  */
  readonly href: string;
  /**
  * The title of the hyperlink
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/config_ui_custom_message#title ConfigUiCustomMessage#title}
  */
  readonly title: string;
}

export function configUiCustomMessageLinkToTerraform(struct?: ConfigUiCustomMessageLinkOutputReference | ConfigUiCustomMessageLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function configUiCustomMessageLinkToHclTerraform(struct?: ConfigUiCustomMessageLinkOutputReference | ConfigUiCustomMessageLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigUiCustomMessageLinkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigUiCustomMessageLink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigUiCustomMessageLink | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._href = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._href = value.href;
      this._title = value.title;
    }
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/config_ui_custom_message vault_config_ui_custom_message}
*/
export class ConfigUiCustomMessage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_config_ui_custom_message";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigUiCustomMessage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigUiCustomMessage to import
  * @param importFromId The id of the existing ConfigUiCustomMessage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/config_ui_custom_message#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigUiCustomMessage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_config_ui_custom_message", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/config_ui_custom_message vault_config_ui_custom_message} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigUiCustomMessageConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigUiCustomMessageConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_config_ui_custom_message',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.3.0',
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
    this._authenticated = config.authenticated;
    this._endTime = config.endTime;
    this._messageBase64 = config.messageBase64;
    this._namespace = config.namespace;
    this._options = config.options;
    this._startTime = config.startTime;
    this._title = config.title;
    this._type = config.type;
    this._link.internalValue = config.link;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authenticated - computed: false, optional: true, required: false
  private _authenticated?: boolean | cdktf.IResolvable; 
  public get authenticated() {
    return this.getBooleanAttribute('authenticated');
  }
  public set authenticated(value: boolean | cdktf.IResolvable) {
    this._authenticated = value;
  }
  public resetAuthenticated() {
    this._authenticated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatedInput() {
    return this._authenticated;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // message_base64 - computed: false, optional: false, required: true
  private _messageBase64?: string; 
  public get messageBase64() {
    return this.getStringAttribute('message_base64');
  }
  public set messageBase64(value: string) {
    this._messageBase64 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageBase64Input() {
    return this._messageBase64;
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

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // link - computed: false, optional: true, required: false
  private _link = new ConfigUiCustomMessageLinkOutputReference(this, "link");
  public get link() {
    return this._link;
  }
  public putLink(value: ConfigUiCustomMessageLink) {
    this._link.internalValue = value;
  }
  public resetLink() {
    this._link.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authenticated: cdktf.booleanToTerraform(this._authenticated),
      end_time: cdktf.stringToTerraform(this._endTime),
      message_base64: cdktf.stringToTerraform(this._messageBase64),
      namespace: cdktf.stringToTerraform(this._namespace),
      options: cdktf.hashMapper(cdktf.stringToTerraform)(this._options),
      start_time: cdktf.stringToTerraform(this._startTime),
      title: cdktf.stringToTerraform(this._title),
      type: cdktf.stringToTerraform(this._type),
      link: configUiCustomMessageLinkToTerraform(this._link.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authenticated: {
        value: cdktf.booleanToHclTerraform(this._authenticated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      end_time: {
        value: cdktf.stringToHclTerraform(this._endTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      message_base64: {
        value: cdktf.stringToHclTerraform(this._messageBase64),
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
      options: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._options),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link: {
        value: configUiCustomMessageLinkToHclTerraform(this._link.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConfigUiCustomMessageLinkList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
