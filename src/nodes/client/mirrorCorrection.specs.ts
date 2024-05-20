import {
    DataType,
    EditorType,
  } from "@visualblocks/custom-node-types";

export const NODE_SPEC: any = {
  'id': 'transform-mirror',
  'name': 'transform Mirror',
  'description': 'Transform the image to mirror image.',
  'category': 'processor',
  'collection': 'IO Collection',

  // Properties.
  'propertySpecs': [
    {
      'name': 'flip',
      'type': DataType.BOOLEAN,
      defaultValue: false,
      'editorSpec': {
        'type': EditorType.SLIDE_TOGGLE
      }
    }
  ],

  // Inputs.
  'inputSpecs': [{
    'name': 'pic',
    'type': DataType.IMAGE
  }],

  // Outputs.
  'outputSpecs': [{
    'name': 'result',
    'type': DataType.IMAGE,
  }],
  recommendedNodes: [
      {
        nodeSpecId: "image_viewer",
      },
    ],
};