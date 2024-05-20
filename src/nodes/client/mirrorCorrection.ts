import type {
  CustomNodeInfo,
  Services,
} from "@visualblocks/custom-node-types";

import { AutoModel, AutoProcessor, RawImage } from "@xenova/transformers";
import { LitElement } from "lit";
import { NODE_SPEC } from './mirrorCorrection.specs'
  /**
   * Transform the input image to mirror image.
   * A minimal example for Visual Blocks custom nodes.
   */
  class MirrorCorrectionNode extends LitElement {
    constructor() {
      super();
    }
  
    async runWithInputs(inputs:any, services: Services) {
        let {pic, flip} = inputs;
        if (!pic?.canvasId) {
          // No input node
          this.dispatchEvent(
            new CustomEvent("outputs", { detail: { 'result': null } })
          );
          return;
        }
        const canvas = services.resourceService.get(
          pic.canvasId
        ) as HTMLCanvasElement;
        const data = canvas.toDataURL();
        const i = await RawImage.fromURL(data);
        const width = i.width;
        const height = i.height;
        const mirroredImage = document.createElement("canvas");
        mirroredImage.width = width;
        mirroredImage.height = height;
        const context = mirroredImage.getContext("2d")!;
        if(flip){
          context.translate(width, 0); 
          context.scale(-1, 1); 
          context.drawImage(i.toCanvas(), 0, 0);
          const out = {
          canvasId: services.resourceService.put(mirroredImage),
          };
          this.dispatchEvent(new CustomEvent('outputs', {detail: { 'result': out }}));
        } else{
          context.drawImage(i.toCanvas(), 0, 0);
          const out = {
          canvasId: services.resourceService.put(mirroredImage),
          };
          this.dispatchEvent(new CustomEvent('outputs', {detail: { 'result': out }}));
        }
        
        
  }
}
  
  export default {
    nodeSpec: NODE_SPEC,
    nodeImpl: MirrorCorrectionNode,
  } as CustomNodeInfo;
