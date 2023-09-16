const { useFunctions } = require('sonata-api/untyped')

module.exports = () => ({
  description: {
    $id: 'animal',
    properties: {
      name: {
        type: 'string'
      },
      specie: {
        enum: [
          'dog',
          'cat',
          'bird'
        ]
      },
      is_docile: {
        type: 'boolean'
      },
      picture: {
        $ref: 'file'
      },
      short_description: {
        type: 'string'
      },
      description: {
        type: 'string',
        s$element: 'textarea'
      }
    },
    freshItem: {
      is_docile: true,
      short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat consequat urna, vel ullamcorper ipsum auctor sit amet. Cras pharetra condimentum augue id luctus. In mollis, ex sed egestas vehicula, lectus dolor feugiat erat, ac vehicula diam velit a sapien. Proin porttitor sagittis ultricies. Curabitur dictum est eget blandit posuere. Sed ultrices vehicula ultricies. Vestibulum id volutpat lorem. Nunc dignissim risus ut dignissim blandit. Cras dapibus, ex eu euismod auctor, tortor dolor egestas turpis, at lobortis mauris dui quis nulla. Nulla commodo, enim id commodo feugiat, lectus nulla dignissim turpis, at volutpat lacus eros in sem. Duis vulputate quam lorem, id blandit mi sodales sed. Fusce in vulputate ante. Nunc et urna erat. Vivamus ac justo vitae orci blandit sollicitudin vel et dui.'
    },
    icon: 'apps',
    presets: [
      'crud',
      'duplicate'
    ],
    filters: [
      'name',
      'specie',
      'is_docile'
    ],
    actions: {
      'route:/animals/': {
        name: 'Ver',
        icon: 'eye'
      }
    }
  },
  functions: useFunctions([
    'get',
    'getAll',
    'insert',
    'remove',
    'upload',
    'removeFile'
  ]),
})
