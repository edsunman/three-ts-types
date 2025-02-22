import Node from "../core/Node.js";
import { ShaderNodeObject } from "../shadernode/ShaderNode.js";

export type MaterialNodeScope =
    | typeof MaterialNode.ALPHA_TEST
    | typeof MaterialNode.COLOR
    | typeof MaterialNode.OPACITY
    | typeof MaterialNode.SHININESS
    | typeof MaterialNode.SPECULAR_COLOR
    | typeof MaterialNode.SPECULAR_STRENGTH
    | typeof MaterialNode.REFLECTIVITY
    | typeof MaterialNode.ROUGHNESS
    | typeof MaterialNode.METALNESS
    | typeof MaterialNode.NORMAL
    | typeof MaterialNode.CLEARCOAT
    | typeof MaterialNode.CLEARCOAT_ROUGHNESS
    | typeof MaterialNode.CLEARCOAT_NORMAL
    | typeof MaterialNode.EMISSIVE
    | typeof MaterialNode.ROTATION
    | typeof MaterialNode.SHEEN
    | typeof MaterialNode.SHEEN_ROUGHNESS
    | typeof MaterialNode.IRIDESCENCE
    | typeof MaterialNode.IRIDESCENCE_IOR
    | typeof MaterialNode.IRIDESCENCE_THICKNESS
    | typeof MaterialNode.LINE_SCALE
    | typeof MaterialNode.LINE_DASH_SIZE
    | typeof MaterialNode.LINE_GAP_SIZE
    | typeof MaterialNode.LINE_WIDTH
    | typeof MaterialNode.LINE_DASH_OFFSET
    | typeof MaterialNode.POINT_WIDTH;

export default class MaterialNode extends Node {
    static ALPHA_TEST: "alphaTest";
    static COLOR: "color";
    static OPACITY: "opacity";
    static SHININESS: "shininess";
    static SPECULAR_COLOR: "specular";
    static SPECULAR_STRENGTH: "specularStrength";
    static REFLECTIVITY: "reflectivity";
    static ROUGHNESS: "roughness";
    static METALNESS: "metalness";
    static NORMAL: "normal";
    static CLEARCOAT: "clearcoat";
    static CLEARCOAT_ROUGHNESS: "clearcoatRoughness";
    static CLEARCOAT_NORMAL: "clearcoatNormal";
    static EMISSIVE: "emissive";
    static ROTATION: "rotation";
    static SHEEN: "sheen";
    static SHEEN_ROUGHNESS: "sheenRoughness";
    static IRIDESCENCE: "iridescence";
    static IRIDESCENCE_IOR: "iridescenceIOR";
    static IRIDESCENCE_THICKNESS: "iridescenceThickness";
    static LINE_SCALE: "scale";
    static LINE_DASH_SIZE: "dashSize";
    static LINE_GAP_SIZE: "gapSize";
    static LINE_WIDTH: "linewidth";
    static LINE_DASH_OFFSET: "dashOffset";
    static POINT_WIDTH: "pointWidth";

    scope: MaterialNodeScope;
    constructor(scope?: MaterialNodeScope);
}

export const materialAlphaTest: ShaderNodeObject<MaterialNode>;
export const materialColor: ShaderNodeObject<MaterialNode>;
export const materialShininess: ShaderNodeObject<MaterialNode>;
export const materialEmissive: ShaderNodeObject<MaterialNode>;
export const materialOpacity: ShaderNodeObject<MaterialNode>;
export const materialSpecularColor: ShaderNodeObject<MaterialNode>;
export const materialSpecularStrength: ShaderNodeObject<MaterialNode>;
export const materialReflectivity: ShaderNodeObject<MaterialNode>;
export const materialRoughness: ShaderNodeObject<MaterialNode>;
export const materialMetalness: ShaderNodeObject<MaterialNode>;
export const materialNormal: ShaderNodeObject<MaterialNode>;
export const materialClearcoat: ShaderNodeObject<MaterialNode>;
export const materialClearcoatRoughness: ShaderNodeObject<MaterialNode>;
export const materialClearcoatNormal: ShaderNodeObject<MaterialNode>;
export const materialRotation: ShaderNodeObject<MaterialNode>;
export const materialSheen: ShaderNodeObject<MaterialNode>;
export const materialSheenRoughness: ShaderNodeObject<MaterialNode>;
export const materialIridescence: ShaderNodeObject<MaterialNode>;
export const materialIridescenceIOR: ShaderNodeObject<MaterialNode>;
export const materialIridescenceThickness: ShaderNodeObject<MaterialNode>;
export const materialLineScale: ShaderNodeObject<MaterialNode>;
export const materialLineDashSize: ShaderNodeObject<MaterialNode>;
export const materialLineGapSize: ShaderNodeObject<MaterialNode>;
export const materialLineWidth: ShaderNodeObject<MaterialNode>;
export const materialLineDashOffset: ShaderNodeObject<MaterialNode>;
export const materialPointWidth: ShaderNodeObject<MaterialNode>;
